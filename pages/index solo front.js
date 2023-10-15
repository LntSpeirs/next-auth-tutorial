import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const HomePage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data);
  console.log(status);

  if (status === "loading") {
    return "Cargando...";
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.user?.name}</h1>
          <p>{data.user?.email}</p>
          <img src={data.user?.image} alt="img usuario" />
        </div>
      ) : (
        <p>Skeleton</p>
      )}
    </div>
  );
};

export default HomePage;
