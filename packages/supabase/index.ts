import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = (url: string, key: string) => {
  return createClient(url, key, {
    auth: { persistSession: true }
  });
};

// Export types/utils for auth
export type { SupabaseClient } from '@supabase/supabase-js';