import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
   const admin = true;

   return admin ? next() : response.status(401).json({
      error: "Unauthorized"
   });
};