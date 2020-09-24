import { Client } from 'discord.js';

const onMessage = async (client: Client): Promise<void> => {
  client.user?.setPresence({
    activity: {
      name: 'Jogando',
      type: 1,
      url: 'xxx',
    },
  });
};

export default onMessage;
