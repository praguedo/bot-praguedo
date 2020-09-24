import { Message, Client } from 'discord.js';
import * as commands from '../commands';
import hasKey from '../utils/hasKeys';

const onMessage = async (message: Message, client: Client): Promise<void> => {
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
};

export default onMessage;
