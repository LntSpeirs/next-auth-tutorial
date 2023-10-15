import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { data: sesion, status } = useSession();
  const router = useRouter();
  
  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <button onClick={() => signIn("")}>Loguear</button>
    </div>
  );
};

export default LoginPage;
