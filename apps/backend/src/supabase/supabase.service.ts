import { Injectable } from '@nestjs/common';
import { createSupabaseClient } from '@repo/supabase';

@Injectable()
export class SupabaseService {
  private supabase = createSupabaseClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  getClient() { return this.supabase; }
}