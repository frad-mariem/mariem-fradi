
const SUPABASE_URL = "https://yqhvqodvarzydqktiaph.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gsN_5m2O4Oo6D5ecSFtFoA_kGFtAhwN";

const { createClient } = window.supabase;

window.supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Food Mood connecté à Supabase !");
