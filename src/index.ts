import { Client, Message } from 'discord.js';
import * as dotenv from 'dotenv';
import * as commands from './commands';
import hasKey from './utils/hasKeys';

dotenv.config();

const client = new Client();

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
  if (
    message.author.bot ||
    message.channel.type === 'dm' ||
    !message.content.startsWith(process.env.PREFIX || '?')
  ) {
    return;
  }

  const args = message.content.slice(1).trim().split(/ +/g);

  if (hasKey(commands, args[0])) {
    commands[args[0]](client, message);
  }
});

client.login('NzU3MjcwMzE1MzcyOTA0NDUw.X2d88A.RQpBi4AjBZWAYalHMuYvl8A97is');
