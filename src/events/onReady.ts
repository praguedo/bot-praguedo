import { Client, ActivityOptions } from 'discord.js';

const onReady = (bot: Client, prefix: string): void => {
  if (!bot.user) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Bot logged as ${bot.user.username}`);

  const presences: ActivityOptions[] = [
    {
      type: 'PLAYING',
      name: `${prefix}info`,
    },
    {
      type: 'WATCHING',
      name: 'XXX...',
    },
  ];

  let i = 1;
  setInterval(async () => {
    if (!bot.user) {
      return;
    }

    await bot.user.setActivity(presences[i]);

    if (i === presences.length - 1) {
      i = 0;
    } else {
      // eslint-disable-next-line no-plusplus
      i++;
    }
  }, 4000);
};

export default onReady;
