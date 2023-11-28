import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //messagesRepo: MessagesRepository;

  constructor(public messagesRepo: MessagesRepository) {
    // Service is creating its own dependencies, this service cannot work correctly unless it has a repository
    //Dont do this on real apps
    //this.messagesRepo = messagesRepo;
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
}
