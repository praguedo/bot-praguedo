import { Client, Message } from 'discord.js';
// import config from '../config';
import commands from './commands';

const client = new Client();

const acceptedCommands = {
  help: 'help',
  ping: 'ping',
  ola: 'ola',
  oi: 'oi',
};

function isValidCommand(value: string): value is keyof typeof acceptedCommands {
  return value in acceptedCommands;
}
function isValidSequence(
  cmd: string[],
): cmd is Array<keyof typeof acceptedCommands> {
  return cmd.every(isValidCommand);
}

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
    !message.content.startsWith('?')
  ) {
    return;
  }

  const args = message.content.slice(1).trim().split(/ +/g);

  if (!isValidSequence(args)) {
    message.reply('Comando inválido disgraça');
    return;
  }

  const commandName = args.map(command => acceptedCommands[command]);

  if (commands[commandName[0]]) {
    commands[commandName[0]](client, message);
  }
});

client.on('message', (msg: Message) => {
  if (!msg.author.bot) {
    console.log(`${msg.author.username}: ${msg.content}`);
    if (msg.content === 'ola') msg.reply('Fala seu praga filha da puta');
  }
});

client.login('NzU3MjcwMzE1MzcyOTA0NDUw.X2d88A._gKNM_JdnD5xKLivb4EPm9hBx7k');
