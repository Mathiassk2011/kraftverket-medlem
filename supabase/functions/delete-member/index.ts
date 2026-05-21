// Supabase Edge Function: delete-member
// Lar admins slette medlemmer (auth.users + profiles).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Mangler autorisasjon" }), {
        status: 401, headers: corsHeaders,
      });
    }

    // Verifiser at den som kaller er admin
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Ikke innlogget" }), {
        status: 401, headers: corsHeaders,
      });
    }

    const { data: profile, error: profileErr } = await userClient
      .from("profiles")
      .select("role")
      .eq("id", userData.user.id)
      .single();

    if (profileErr || profile?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Kun admin kan slette medlemmer" }), {
        status: 403, headers: corsHeaders,
      });
    }

    // Parse data
    const { user_id } = await req.json();
    if (!user_id) {
      return new Response(JSON.stringify({ error: "Mangler user_id" }), {
        status: 400, headers: corsHeaders,
      });
    }

    // Forhindre at admin sletter seg selv
    if (user_id === userData.user.id) {
      return new Response(JSON.stringify({ error: "Du kan ikke slette deg selv" }), {
        status: 400, headers: corsHeaders,
      });
    }

    // Slett bruker via service-role
    const adminClient = createClient(SUPABASE_URL, SERVICE_KEY);
    const { error } = await adminClient.auth.admin.deleteUser(user_id);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400, headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: corsHeaders,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Ukjent feil" }), {
      status: 500, headers: corsHeaders,
    });
  }
});
