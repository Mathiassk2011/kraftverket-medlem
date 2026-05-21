// Supabase Edge Function: reset-password
// Lar admin sette nytt passord for et medlem.

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

    const { data: profile } = await userClient
      .from("profiles")
      .select("role")
      .eq("id", userData.user.id)
      .single();

    if (profile?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Kun admin kan resette passord" }), {
        status: 403, headers: corsHeaders,
      });
    }

    // Parse data
    const { user_id, password } = await req.json();
    if (!user_id || !password) {
      return new Response(JSON.stringify({ error: "Mangler user_id eller password" }), {
        status: 400, headers: corsHeaders,
      });
    }
    if (password.length < 6) {
      return new Response(JSON.stringify({ error: "Passord må være minst 6 tegn" }), {
        status: 400, headers: corsHeaders,
      });
    }

    // Reset passord via service-role
    const adminClient = createClient(SUPABASE_URL, SERVICE_KEY);
    const { error } = await adminClient.auth.admin.updateUserById(user_id, {
      password,
    });

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
