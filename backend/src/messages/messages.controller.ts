import { Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private messagesService: MessagesService,
  ) {}

  @Post('send')
  async sendMessage(
    chatId: string,
    senderId: string,
    content: string,
  ){
    const message = await this.messagesService.sendMessage(chatId, senderId, content);
    if (!message) {
      throw new Error('Failed to send message');
    }
    return message;
  }

  
}
