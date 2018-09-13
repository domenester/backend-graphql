import UserInputType from '../types/user-update';
import UserType from '../types/user';
import { GraphQLNonNull, GraphQLID } from 'graphql/type';

export default {
  type: UserType,
  description: 'Updates user main information',
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    data: { type: UserInputType },
  },
  resolve: (_id, data) => new Error("Not implemented yet"),
};
