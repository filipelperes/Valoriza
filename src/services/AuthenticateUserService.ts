import { UsersRepository as usersRepository } from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
   email: string;
   password: string;
}

class AuthenticateUserService {
   async execute({ email, password }: IAuthenticateRequest) {
      const user = await usersRepository.findOneBy({
         email
      });

      if (!user) throw new Error("Email/Password incorrect");

      const match = await compare(password, user.password);

      if (!match) throw new Error("Email/Password incorrect");

      const token = sign(
         {
            email: user.email
         },
         "e79d49dda02e6e56c886801a98beab66",
         {
            subject: user.id,
            expiresIn: "1d"
         });

      return token;
   }
}

export { AuthenticateUserService };