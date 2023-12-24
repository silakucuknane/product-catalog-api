const logger = require('../logs/logger');

const loggerMiddleware = (req, res, next) => {
    const { method, url, params, query, body, headers } = req;
    const logMessage = `${method} ${url} - Params: ${JSON.stringify(params)}, Query: ${JSON.stringify(query)}, Body: ${JSON.stringify(body)}, Headers: ${JSON.stringify(headers)}`;

    logger.info(logMessage);
    next();
};

module.exports = loggerMiddleware;