import { UsersRepository as userRepository } from "../repositories/UsersRepository";

interface IUserRequest {
   name: string;
   email: string;
   admin?: boolean;
}

class CreateUserService {
   async execute({ name, email, admin }: IUserRequest) {
      if (!email) throw new Error("Email incorrect");

      const userAlreadyExists = await userRepository.findOneBy({
         email
      });

      if (userAlreadyExists) throw new Error("User already exists");


      const user = userRepository.create({
         name,
         email,
         admin
      });

      await userRepository.save(user);

      return user;
   };
}

export { CreateUserService };