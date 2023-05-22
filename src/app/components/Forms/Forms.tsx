"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useSupabase } from "@/context/SupabaseContext";
import { useRouter } from "next/navigation";
import { useAuthInfo } from "@/context/AuthContext";
const Forms = () => {
  const { setUserInformation } = useAuthInfo();
  const router = useRouter();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: userCredentials.email,
      password: userCredentials.password,
    });

    router.push("/confirm");
  };

  const handleLogin = async () => {
    const userInformation = await supabase.auth.signInWithPassword({
      email: userCredentials.email,
      password: userCredentials.password,
    });

    if (userInformation.error || !userInformation.data.user) return;

    setUserInformation(userInformation.data?.user);
    router.push("/dashboard");

    userInformation?.data?.user;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white rounded-lg p-4 w-1/4 absolute left-1/2 -translate-x-1/2 top-1/4 space-y-4"
    >
      <div className="flex justify-center">
        <Image
          src="/pokemonLogo.png"
          alt="pokemonlogo"
          width={300}
          height={400}
        />
      </div>
      <span className="flex flex-col">
        <label htmlFor="email">Email</label>
        <span>
          <input
            onChange={(e) =>
              setUserCredentials({ ...userCredentials, email: e.target.value })
            }
            className="border-2 rounded-lg w-full p-1"
            type="email"
            name="email"
            id="email"
          />
        </span>
      </span>
      <span className="flex flex-col">
        <label htmlFor="password">password</label>
        <span>
          <input
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
            className="border-2 rounded-lg w-full p-1"
            type="password"
            name="password"
            id="password"
          />
        </span>
      </span>
      <div className="flex space-x-2">
        <button
          onClick={handleLogin}
          className="rounded-md py-3 w-full flex items-center justify-center hover:bg-green-500 hover:duration-200 ease-in-out transition bg-green-600 font-bold text-white"
          type="submit"
        >
          Login
          <Image
            className="pl-2"
            src="/pokeballs.png"
            alt="pokeball"
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleSignUp}
          className="rounded-md py-3 w-full flex items-center justify-center hover:bg-blue-500 hover:duration-200 ease-in-out transition bg-blue-600 font-bold text-white"
          type="submit"
        >
          Sign Up
          <Image
            className="pl-2"
            src="/pokeballs.png"
            alt="pokeball"
            width={30}
            height={30}
          />
        </button>
      </div>
    </form>
  );
};

export default Forms;
