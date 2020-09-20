import { Client } from 'discord.js';

const client = new Client();

client.on('ready', () => {
  console.log(
    `Bot foi iniciado, com ${client.users} usuários, em ${client.channels} canais, em ${client.guilds} servidores.`,
  );

  client.user?.setPresence({
    activity: {
      name: 'Jogando',
      type: 1,
      url: 'twitch.tv/vinitartari',
    },
  });
  // 0 = Jogando
  //  1 = Transmitindo
  //  2 = Ouvindo
  //  3 = Assistindo
});

client.on('message', async (message: any) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith('?')) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  // coamdno ping
  if (comando === 'ping') {
    const m = await message.channel.send('Ping?');
    m.edit(
      `Pong! A Latência é ${
        m.createdTimestamp - message.createdTimestamp
      }ms. A Latencia da API é ms`,
    );
  }
});

client.login('NzU3MjcwMzE1MzcyOTA0NDUw.X2d88A._gKNM_JdnD5xKLivb4EPm9hBx7k');
