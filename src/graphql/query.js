import { GraphQLObjectType } from 'graphql/type';

import { fields as user } from './models/users/queries/index';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'List with all possible queries',
  fields: {
    user,
  },
});
