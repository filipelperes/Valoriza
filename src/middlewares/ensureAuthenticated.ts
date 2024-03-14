import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
   sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
   const { authorization: auth } = request.headers;

   if (!auth) return response.status(401).end();

   const [, token] = auth.split(" ");

   try {
      const { sub } = verify(token, "e79d49dda02e6e56c886801a98beab66") as IPayload;
      request.user_id = sub;
      return next();
   } catch (err) {
      return response.status(401).end();
   }


}