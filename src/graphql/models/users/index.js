import { GraphQLSchema } from 'graphql/type';

import UserQuery from './queries/index';

export default new GraphQLSchema({
  query: UserQuery,
});
