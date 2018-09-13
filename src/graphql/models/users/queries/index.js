import { GraphQLObjectType, GraphQLString } from 'graphql/type';
import UserType from '../types/user';

export const fields = {
  type: UserType,
  args: { _id: { type: GraphQLString } },
  resolve: () => ({
    // throw Error('Not implemented yet');
    _id: 'any',
    firstName: 'any',
    lastName: 'any',
    fullName: 'any',
    email: 'any',
    aud: 'any',
  }),
};

export default new GraphQLObjectType({
  name: 'RootUserQuery',
  fields,
});
