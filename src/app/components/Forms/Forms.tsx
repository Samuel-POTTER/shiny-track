"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BUTTON_ACTION } from "@/constant/buttonAction";
import { IUserInformation } from "@/types/user";
import { useAuthInfo } from "@/context/AuthContext";

interface IFormsProps {
  action: BUTTON_ACTION.SIGNUP | BUTTON_ACTION.LOGIN;
}

const Forms = ({ action }: IFormsProps) => {
  const { setUserInformation } = useAuthInfo();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const endpoint = action === BUTTON_ACTION.SIGNUP ? "signup" : "login";

    e.preventDefault();

    const userInformation = await fetch(`http://localhost:3000/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });

    const data = await userInformation.json();

    setUserInformation(data);
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
      <button
        className="rounded-md py-3 w-full flex items-center justify-center hover:bg-blue-500 hover:duration-200 ease-in-out transition bg-blue-600 font-bold text-white"
        type="submit"
      >
        {action}
        <Image
          className="pl-2"
          src="/pokeballs.png"
          alt="pokeball"
          width={30}
          height={30}
        />
      </button>
    </form>
  );
};

export default Forms;
