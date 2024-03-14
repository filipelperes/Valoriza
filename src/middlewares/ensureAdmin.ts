import { Request, Response, NextFunction } from "express";
import { UsersRepository as usersRepository } from "../repositories/UsersRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
   const { user_id } = request;

   const { admin } = await usersRepository.findOneBy({ id: user_id });

   return admin ? next() : response.status(401).json({
      error: "Unauthorized"
   });
};