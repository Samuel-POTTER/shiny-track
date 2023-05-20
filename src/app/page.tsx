import Image from "next/image";
import Forms from "./components/Forms/Forms";
import { BUTTON_ACTION } from "@/constant/buttonAction";
import { AuthProvider } from "@/context/AuthContext";

export default function Home() {
  return (
    <AuthProvider>
      <main className="h-screen">
        <Image
          className="absolute right-0 bottom-0"
          src="/pikachu.png"
          width="300"
          height="300"
          alt="pikachu"
        />
        <Forms action={BUTTON_ACTION.LOGIN} />
      </main>
    </AuthProvider>
  );
}
