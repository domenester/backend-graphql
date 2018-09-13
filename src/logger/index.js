const winston = require('winston');
const expressWinston = require('express-winston');

const options = {
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: () => false,
};

export const logger = winston;
export const expressWinstonMiddleware = expressWinston.logger(options);
