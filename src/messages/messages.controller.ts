import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  allMessages(){}
  
  @Post()
  createMessage(){}

  @Get('/:id')
  getMessage(){}
}
