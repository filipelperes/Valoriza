import { ComplimentsRepository as complimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceiveComplimentsService {
   async execute(user_id: string) {
      return await complimentsRepository.find({
         where: {
            user_receiver: user_id
         },
         relations: ["UserSender", "userReceiver", "tag"]
      });
   }
}

export { ListUserReceiveComplimentsService };