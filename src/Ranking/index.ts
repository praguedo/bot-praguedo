import Redis, { Redis as RedisClient } from 'ioredis';
import RedisConfig from '../config/redis';

export default class Ranking {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(RedisConfig.config.redis);
  }

  public async setScore(user_id: string): Promise<number> {
    const oldScore = await this.client.get(user_id);

    if (!oldScore) {
      await this.client.set(user_id, 1);
      return 1;
    }

    await this.client.del(user_id);

    const newScore = Number(oldScore) + 1;

    await this.client.set(user_id, newScore);

    return newScore;
  }
}
