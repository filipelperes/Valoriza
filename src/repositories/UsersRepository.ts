import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

const UsersRepository = AppDataSource.getRepository(User);
export { UsersRepository };