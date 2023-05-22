"use client";
import { IUserInformation } from "@/types/user";
import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

interface IAuthContextValue {
  userInformation: User;
  setUserInformation: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<IAuthContextValue>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInformation, setUserInformation] = useState<User>(null!);

  return (
    <AuthContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthInfo = () => useContext(AuthContext);

export { AuthProvider, useAuthInfo };
