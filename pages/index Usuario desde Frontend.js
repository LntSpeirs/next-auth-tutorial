import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    (async () => {
      const sesion = await getSession();
      console.log(sesion);
      setUsuario(sesion.user);
    })();
  }, []);
  console.log(usuario)
  return (
    <div>
      {JSON.stringify(usuario, null, 2)}
      <h1>{usuario?.name}</h1>
      <p>{usuario?.email}</p>
      <img src={usuario?.image}></img>
    </div>
  );
};

export default HomePage;
