"use client";
 
 export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
 
//const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 const hankoApi = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io'


export default function LogoutBtn({ onLogout }) {
  const router = useRouter();
  const [hanko, setHanko] = useState();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);
 
  const logout = async () => {
    onLogout()
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }

  };
 
  return <button onClick={logout} className="btn btn-primary">Logout</button>;
}
