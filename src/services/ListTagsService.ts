import { instanceToPlain } from "class-transformer";
import { TagsRepository as tagsRepository } from "../repositories/TagsRepository";

class ListTagsService {
   async execute() {
      let tags = await tagsRepository.find();

      return instanceToPlain(tags);
   }
}

export { ListTagsService };