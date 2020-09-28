import { Message, Client } from 'discord.js';

export default async (client: Client, message: Message): Promise<void> => {
  message.reply(`Salvee ${message.author.username}`);
};
