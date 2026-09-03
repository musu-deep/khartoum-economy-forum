import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type RegistrationCategory =
  | 'government'
  | 'private_sector'
  | 'unions'
  | 'community'
  | 'financial'
  | 'academic';

export type Registration = {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string | null;
  category: string;
  interest_areas: string[];
  will_present_paper: boolean;
  paper_title: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

export type RegistrationInput = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  category: string;
  interest_areas: string[];
  will_present_paper: boolean;
  paper_title: string;
  message: string;
};
