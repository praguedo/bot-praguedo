import { Message, Client } from 'discord.js';
import axios from 'axios';

export default async (client: Client, message: Message): Promise<void> => {
  try {
    const { content } = message;

    const [, profile] = content.split(' ');

    const userGithubStats = await axios.get(
      `https://api.github.com/users/${profile}`,
    );

    const { data } = userGithubStats;

    const {
      avatar_url,
      html_url,
      name,
      company,
      bio,
      public_repos,
      followers,
      following,
    } = data;

    message.reply(`
    ${avatar_url}\n
    link perfil: ${html_url}\n
    nome: ${name}\n
    empresa: ${company}\n
    bio: ${bio}\n
    número de repositórios públicos: ${public_repos}\n
    seguidores: ${followers}\n
    seguindo: ${following}
  `);
  } catch (error) {
    message.channel.send('Perfil não foi encontrado.');
  }
};
