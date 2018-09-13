import { GraphQLObjectType } from 'graphql/type';

// User
import createUser from './models/users/mutations/create-user';

export const fields = {
  createUser,
};

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'List with all possible mutations',
  fields,
});
