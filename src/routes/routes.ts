import express from 'express';
import { middlewareUserValidation } from "../middlewares/middlewareUserValidation";
import { getAllUsers, createUser } from '../controllers/getAllUsers';

export const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)

routerUsers.post('/',middlewareUserValidation,  createUser)