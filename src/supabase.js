import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rocihslhedamjbfxmdeq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvY2loc2xoZWRhbWpiZnhtZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMjMyODMsImV4cCI6MjAwODc5OTI4M30.3xSIU3lcHHPEUaARRojTA8s_OcISqTxRcr4_IKEk8Cc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
