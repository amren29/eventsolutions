import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as unknown as SupabaseClient;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

export interface DBProduct {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  includes: string[];
  is_published: boolean;
  image_fit: "cover" | "contain" | "contain-padded";
  created_at: string;
}

export interface DBCategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
}
