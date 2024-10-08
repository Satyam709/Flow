import { getServerSession } from "next-auth";
import authOptions from "./authConfig";

export async function getSession() {
  return await getServerSession(authOptions);
}
