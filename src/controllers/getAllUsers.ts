import { Request, Response } from "express";
import { createNewUser, getUsers } from "../services/getAllUsers";

export const getAllUsers =  async (_request: Request, response: Response) => {
  const allUsers = await getUsers();
  return response.status(200).json(allUsers)
};

export const createUser =  async (request: Request, response: Response) => {
  const {email, password, name} = request.body

  await createNewUser(email, password, name)
  return response.status(200).json({message: 'Usuário criado com sucesso !!'})
}