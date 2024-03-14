import { ComplimentsRepository as complimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserSendComplimentsService {
   async execute(user_id: string) {
      return await complimentsRepository.find({
         where: {
            user_sender: user_id
         },
         relations: ["UserSender", "userReceiver", "tag"]
      });
   }
}

export { ListUserSendComplimentsService };