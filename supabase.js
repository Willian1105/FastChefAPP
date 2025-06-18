import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cziiakrkhjsjmtiiocxm.supabase.co'; // substitua pela sua URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6aWlha3JraGpzam10aWlvY3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzU0MTEsImV4cCI6MjA2MzI1MTQxMX0.jwvLzm25vXjL3Pyrk5QV-tPKzm_VEuKnSMn-3MGqatI';;               // substitua pela sua chave anon

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);