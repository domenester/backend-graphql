import { GraphQLEnumType } from 'graphql/type';

export default new GraphQLEnumType({
  name: 'UserType',
  description: 'User types',
  values: {
    ADMIN: { value: 'admin' },
    CUSTOMER: { value: 'customer' },
    SYSTEM: { value: 'system' },
  },
});
