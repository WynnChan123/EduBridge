import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async sendMessage(
    chatId: string,
    senderId: string,
    content: string,
  ) {
    const message = await this.prisma.message.create({
      data: {
        chat: {
          connect: { id: chatId },
        },
        sender: {
          connect: { id: senderId },
        },
        content,
        createdAt: new Date(),
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    if (!message) {
      throw new Error('Failed to send message');
    }

    return message;
  }

  async createPrivateChat(userId: string, receiverId: string): Promise<any> {
    const chats = await this.prisma.chat.findMany({
      where: {
        title: null,
        isGroupChat: false,
        participants: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        participants: true,
      },
    });

    const existingChat = chats.find(
      (chat) =>
        chat.participants.length === 2 &&
        chat.participants.some((p) => p.userId === receiverId),
    );

    if (existingChat) {
      return existingChat;
    }

    const privateConvo = await this.prisma.chat.create({
      data: {
        isGroupChat: false,
        title: null,
        participants: {
          create: [
            { user: { connect: { id: userId } } },
            { user: { connect: { id: receiverId } } },
          ],
        },
        createdAt: new Date(),
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });

    return privateConvo;
  }

  async createGroupChat(
    title: string,
    userId: string,
    receiverIds: string[],
  ): Promise<any> {
    const existingGroupChat = await this.prisma.chat.findFirst({
      where: {
        isGroupChat: true,
        title,
        participants: {
          some: {
            userId: {
              in: [userId, ...receiverIds],
            },
          },
        },
      },
    });
    if (existingGroupChat) {
      return existingGroupChat;
    }
    const conversation = await this.prisma.chat.create({
      data: {
        title,
        isGroupChat: true,
        participants: {
          create: [
            { user: { connect: { id: userId } } },
            ...receiverIds.map((id) => ({
              user: { connect: { id } },
            })),
          ],
        },
        createdAt: new Date(),
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });

    return conversation;
  }
}
