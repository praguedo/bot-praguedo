import { Client, Message } from 'discord.js';
import config from '../config';

const client = new Client();

const acceptedCommands = ['help', 'ping', 'ola', 'oi'];

client.on('ready', () => {
  client.user?.setPresence({
    activity: {
      name: 'Jogando',
      type: 1,
      url: 'twitch.tv/vinitartari',
    },
  });
});

client.on('message', async (message: Message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith('?')) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  console.log(args);
  console.log(acceptedCommands);

  if (args[0] === 'ping') {
    const m = await message.channel.send('Ping?');

    m.edit(
      `Pong! A Latência é ${
        m.createdTimestamp - message.createdTimestamp
      }ms. A Latencia da API é ms`,
    );
  }
});

client.on('message', (msg: Message) => {
  if (!msg.author.bot) {
    console.log(`${msg.author.username}: ${msg.content}`);
    if (msg.content === 'ola') msg.reply('Fala seu praga filha da puta');
  }
});

client.login('NzU3MjcwMzE1MzcyOTA0NDUw.X2d88A._gKNM_JdnD5xKLivb4EPm9hBx7k');
