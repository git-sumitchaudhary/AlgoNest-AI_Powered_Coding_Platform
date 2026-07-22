const { createClient }  = require('redis');

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-11787.crce206.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 11787
    }
});


module.exports = redisClient;


