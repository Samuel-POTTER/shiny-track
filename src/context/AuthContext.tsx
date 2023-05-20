"use client";
import { IUserInformation } from "@/types/user";
import { createContext, useContext, useState } from "react";

interface IAuthContextValue {
  userInformation: IUserInformation | undefined;
  setUserInformation: React.Dispatch<
    React.SetStateAction<IUserInformation | undefined>
  >;
}

export const AuthContext = createContext<IAuthContextValue>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInformation, setUserInformation] = useState<IUserInformation>();

  return (
    <AuthContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthInfo = () => useContext(AuthContext);

export { AuthProvider, useAuthInfo };
