import { Client, Message } from 'discord.js';
import * as dotenv from 'dotenv';
import * as events from '../events';

dotenv.config();
const client = new Client();

const { onMessege, onReady } = events;

client.on('ready', () => onReady(client));

client.on('message', async (message: Message) => onMessege(message, client));

client.login(process.env.TOKEN);

export default client;
