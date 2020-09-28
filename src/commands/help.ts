import { Message, Client } from 'discord.js';

export default async (client: Client, message: Message): Promise<void> => {
  message.reply('Fala seu praga');
};
