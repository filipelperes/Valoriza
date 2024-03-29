import { TagsRepository as tagsRepository } from '../repositories/TagsRepository';

class CreateTagService {
   async execute(name: string) {
      if (!name) throw new Error("Incorrect name!");

      const tagAlreadyExists = await tagsRepository.findOneBy({
         name
      });

      if (tagAlreadyExists) throw new Error("Tag already exists!");

      const tag = tagsRepository.create({
         name
      });

      await tagsRepository.save(tag);

      return tag;
   }
}

export { CreateTagService };