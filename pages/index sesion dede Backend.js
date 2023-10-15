import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const HomePage = ({ title, sesion }) => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    setUsuario(sesion);
    console.log(title);
    console.log(sesion);
  }, []);

  return (
    <div>
      <h1>{usuario?.name}</h1>
      <p>{usuario?.email}</p>
      <img src={usuario?.image}></img>
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      title: "My first page",
      sesion: session,
    },
  };
};
