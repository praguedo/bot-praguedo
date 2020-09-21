import { Message, Client } from 'discord.js';

// const aviso = async (client: Client, message: Message) => {
//   const avisoChannel = await message.guild.channels.cache.find(
//     channel => channel.id == config.avisosChannelId,
//   );

//   let message = message.content.split(' ');
//   message.splice(0, 1);
//   message = message.join(' ');
//   await avisoChannel.send(`@everyone ${message}`);
//   message.reply(`Avisado no canal ${avisoChannel}`);
// };

export const ping = async (client: Client, message: Message) => {
  const msg = await message.channel.send('Quer saber o ping desgraça?');
  message.reply(
    `A Latência: ${msg.createdTimestamp - message.createdTimestamp}ms.`,
  );
};

export const help = async (client: Client, message: Message) => {};
