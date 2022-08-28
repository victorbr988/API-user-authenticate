import { createUser, getAllUsers } from "../models/userData";

export const getUsers = async () => {
  const allUsers = await getAllUsers()
  return allUsers;
}

export const createNewUser = async (email: string, password: string, name: string) => {
  await createUser(email, password, name)
}