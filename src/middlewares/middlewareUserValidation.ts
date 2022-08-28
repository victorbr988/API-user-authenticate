import { NextFunction, Request, Response } from "express"
import { createUser } from "../models/userData"
import { validity } from "../validations/validationUserData"

export interface UserSignup {
  email: string
  name: string
  password: string
}

export const middlewareUserValidation = async (request: Request, response: Response, next: NextFunction) => {
  const data: UserSignup = request.body
  const validation = await validity(data);

  if (!validation) return response.status(400).json({message: "Os dados inseridos estão inválidos"});
  
  const user = await createUser(data.email, data.name, data.password);
  
  if(user) return response.status(402).json({message: "Email já está em uso"})

  next()
}