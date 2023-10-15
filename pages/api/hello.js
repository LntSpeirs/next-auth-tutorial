import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const sesion = await getSession({req});
  if (!sesion) return res.status(403).send("Usuario no autorizado");
  res.status(200).json({ name: "john doe" });
}
