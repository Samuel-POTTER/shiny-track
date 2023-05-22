import { Database } from "@/types/supabase";
import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const POST = async (req: Request) => {
  const data = await req.json();

  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  const currentUser = await supabase.auth.getUser();

  const createCard = await supabase.from("Card").insert([
    {
      pokemon_name: data.name,
      encounter_count: 0,
      is_shiny: false,
      user_id: currentUser?.data?.user?.id,
    },
  ]);

  return new Response(JSON.stringify(createCard), {
    headers: { "content-type": "application/json" },
  });
};
