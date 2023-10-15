import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const HomePage = () => {
  const { data: sesion, status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status !== "authenticated") {
    router.push("/login");
  }
  return (
    <div>
      {sesion ? (
        <div>
          <h1>{sesion.user?.name}</h1>
          <p>{sesion.user?.email}</p>
          <img src={sesion.user?.image} alt="img usuario" />
        </div>
      ) : (
        <p>Skeleton</p>
      )}

      <button onClick={() => signOut()}>Cerrrar sesion</button>
    </div>
  );
};

export default HomePage;
