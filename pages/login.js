import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const { data: sesion, status } = useSession();
  const router = useRouter();
  

  useEffect(() => {
    async () => {
      const providers = await getProviders();
      console.log(providers)
    };
  }, []);

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <button onClick={() => signIn("")}>Loguear con Github</button>
    </div>
  );
};

export default LoginPage;
