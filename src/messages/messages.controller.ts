import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
// Get, Post => Method Decorators
// Body, Param => Argument Decorators


@Controller('messages')
export class MessagesController {
  //messagesService: MessagesService;

  constructor(public messagesService: MessagesService) {
    // We will refactor code using dependency injection
    //this.messagesService = new MessagesService();
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
  async getMessage(@Param('id') id: string) {
    // console.log(id);
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
