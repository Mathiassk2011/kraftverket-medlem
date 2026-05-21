// Supabase Edge Function: create-member
// Lar admins opprette nye medlemmer uten å gå via Supabase-dashboardet.

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
        status: 401,
        headers: corsHeaders,
      });
    }

    // Verifiser at den som kaller er admin
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Ikke innlogget" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const { data: profile, error: profileErr } = await userClient
      .from("profiles")
      .select("role")
      .eq("id", userData.user.id)
      .single();

    if (profileErr || profile?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Kun admin kan opprette medlemmer" }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Parse data fra request
    const { email, password, name } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "E-post og passord er påkrevd" }), {
        status: 400,
        headers: corsHeaders,
      });
    }
    if (password.length < 6) {
      return new Response(JSON.stringify({ error: "Passord må være minst 6 tegn" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Opprett bruker med service-role (bypasser disabled signup)
    const adminClient = createClient(SUPABASE_URL, SERVICE_KEY);
    const { data, error } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name: name || email.split("@")[0] },
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    return new Response(
      JSON.stringify({ success: true, user_id: data.user?.id, email: data.user?.email }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Ukjent feil" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
