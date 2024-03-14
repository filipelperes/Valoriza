import { instanceToPlain } from "class-transformer";
import { UsersRepository as usersRepository } from "../repositories/UsersRepository";

class ListUsersService {
   async execute() {
      const users = await usersRepository.find();
      return instanceToPlain(users);
   };
}

export { ListUsersService };