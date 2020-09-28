import { Message, Client } from 'discord.js';

export default async (client: Client, message: Message): Promise<void> => {
  message.channel.send(`Oi ${message.author.username} você tá carente?`);
};
