export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Card: {
        Row: {
          created_at: string | null;
          encounter_count: number | null;
          id: string;
          is_shiny: boolean | null;
          pokemon_name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          encounter_count?: number | null;
          id?: string;
          is_shiny?: boolean | null;
          pokemon_name?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          encounter_count?: number | null;
          id?: string;
          is_shiny?: boolean | null;
          pokemon_name?: string | null;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
