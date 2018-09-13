import bodyParser from 'body-parser';
import express from 'express';
import { logger, expressWinstonMiddleware } from '../logger/index';
import graphql from '../graphql/index';

const app = express();
const { env } = process;

export default () => {
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
  app.use(expressWinstonMiddleware);

  const server = app.listen(env.NODE_PORT || 5000, () => {
    const host = server.address().address;
    const { port } = server.address();
    logger.info(`[SERVER] Running at http://${host}:${port}`);
  });

  graphql(app);

  return app;
};
