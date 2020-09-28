import { Message, Client } from 'discord.js';

export default async (client: Client, message: Message): Promise<void> => {
  const msg = await message.channel.send('Quer saber o ping praga?');
  message.channel.send(
    `Latência: ${msg.createdTimestamp - message.createdTimestamp}ms.`,
  );
};
