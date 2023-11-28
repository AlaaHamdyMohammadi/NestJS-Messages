import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
// Get, Post => Method Decorators
// Body, Param => Argument Decorators


@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor(){
    // We will refactor code using dependency injection
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(body);
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    // console.log(id);
    return this.messagesService.findOne(id);
  }
}
