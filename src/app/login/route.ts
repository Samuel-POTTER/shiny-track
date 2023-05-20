import { NextResponse } from "next/server";
import { supabase } from "../supabaseClient";

export const POST = async (req: Request) => {
  const signUpCredentials = await req.json();
  const { email, password } = signUpCredentials;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
};
