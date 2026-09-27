import { User_interface as User } from "../interfaces/user.interface";
import { db } from "../prisma/db";

export async function getUserByUsername(
  username: string,
): Promise<User | null> {
  const user: User | null = await db.orm.public.Users
    .where({ username: username }) 
    .first();

  return user;
}


export async function getUserById(id: number): Promise<User | null> {
  const user: User | null = await db.orm.public.Users.where({
    id: id,
  }).first();

  return user;
}
