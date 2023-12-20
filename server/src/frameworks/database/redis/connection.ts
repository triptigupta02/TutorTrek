import configKeys from '../../../config';
import * as redis from 'redis';

const connection = () => {
  const createRedisClient = () => {
    const client = redis.createClient({
      url: 'redis://alice:foobared@awesome.redis.server:6380',
    });

    client.on('error', (err: Error) => console.log('Redis Client Error', err));

    return client;
  };

  return {
    createRedisClient,
  };
};

export default connection;
