const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-17474.crce281.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 17474
    }
});

module.exports = redisClient;


