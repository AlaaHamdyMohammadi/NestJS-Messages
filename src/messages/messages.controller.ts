import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Get, Post => Method Decorators
// Body, Param => Argument Decorators


@Controller('messages')
export class MessagesController {
  @Get() 
  allMessages(){}
  
  @Post()
  createMessage(@Body() body: any){
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string){
    console.log(id)
  }
}
