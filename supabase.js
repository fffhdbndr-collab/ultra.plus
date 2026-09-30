import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://biffntikbgpptpezzcyk.supabase.co'
const SUPABASE_ANON_KEY = 'Sb_publishable_ezsF35smSK7h6hBMfFm_zA_j8t5W-bU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
