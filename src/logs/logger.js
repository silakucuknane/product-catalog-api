const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: path.join(__dirname, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(__dirname, 'access.log'), level: 'info' }),
    ]
});

module.exports = logger;