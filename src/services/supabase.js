import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ecafvbnjtngkwzbqqpro.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjYWZ2Ym5qdG5na3d6YnFxcHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1Mzk4ODYsImV4cCI6MjA3MTExNTg4Nn0.H0lbz6NQ5wsBQhNaoKy_4h3x7VRneZxvAjx8lwoR7P0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
