import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'SUPABASE_URL';  // substitua pela sua URL
const SUPABASE_ANON_KEY = 'SUPABASE_ANON_KEY';               // substitua pela sua chave anon

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);