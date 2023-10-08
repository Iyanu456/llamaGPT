import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Hanko = dynamic(() => import("@teamhanko/hanko-elements"), { ssr: false });

const hankoApi = `https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io`;

export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState(null);

  useEffect(() => {
    import("@teamhanko/hanko-elements")
      .then(({ Hanko }) => {
        setHanko(new Hanko(hankoApi));
      })
      .catch((error) => {
        console.error("Error importing Hanko:", error);
      });
  }, []);

  const logout = async () => {
    try {
      if (hanko) {
        await hanko.user.logout();
      }
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to HankoAuth</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
