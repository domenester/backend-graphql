import { GraphQLEnumType } from 'graphql/type';

export default new GraphQLEnumType({
  name: 'Gender',
  values: {
    MALE: { value: 'male' },
    FAMALE: { value: 'female' },
  },
});
