import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

function coerceDate(value) {
  let valueParsed;
  try {
    valueParsed = new Date(value);
  } catch (e) {
    throw new Error(e);
  }

  if (!(valueParsed instanceof Date)) {
    throw new Error('Field error: value is not an instance of Date');
  }
  if (isNaN(valueParsed.getTime())) {
    throw new Error('Field error: value is an invalid Date');
  }
  return valueParsed.toJSON();
}

export default new GraphQLScalarType({
  name: 'Date',
  serialize: coerceDate,
  parseValue: coerceDate,
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Query error: Can only parse strings to dates but got a: ${ast.kind}`, [ast]);
    }
    const result = new Date(ast.value);
    if (isNaN(result.getTime())) {
      throw new GraphQLError('Query error: Invalid date', [ast]);
    }
    return result;
  },
});
