import { Message, Client } from 'discord.js';

// export const aviso = async (client: Client, msg: Message) => {
//   const avisoChannel = await msg.guild.channels.cache.find(
//     channel => channel.id == config.avisosChannelId,
//   );

//   let message = msg.content.split(' ');
//   message.splice(0, 1);
//   message = message.join(' ');
//   await avisoChannel.send(`@everyone ${message}`);
//   msg.reply(`Avisado no canal ${avisoChannel}`);
// };

export const ping = async (client: Client, msg: Message) => {};

export const help = async (client: Client, msg: Message) => {};
