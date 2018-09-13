import graphqlHTTP from 'express-graphql';
import RootSchema from './schema';
import { logger } from '../logger/index';

export default (app) => {
  app.use(
    '/graphql',
    graphqlHTTP(() => ({ schema: RootSchema, graphiql: true })),
  );
  logger.info('[GRAPHQL] Successfully started');
};
