import { ComplimentsRepository as complimentRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository as userRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
   tag_id: string;
   user_sender: string;
   user_receiver: string;
   message: string;
}

class CreateComplimentService {
   async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
      if (user_sender === user_receiver) throw new Error("Incorrect user receiver!");

      const receiverExists = await userRepository.findOneBy({
         id: user_receiver
      });

      if (!receiverExists) throw new Error("User Receiver does not exists!");

      const compliment = complimentRepository.create({
         tag_id,
         user_receiver,
         user_sender,
         message
      });

      await complimentRepository.save(compliment);

      return compliment;
   }
}

export { CreateComplimentService };