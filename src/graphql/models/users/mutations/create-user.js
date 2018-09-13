import UserInputType from '../types/user-create';
import UserType from '../types/user';

export default {
  type: UserType,
  description: 'Creates a new user',
  args: {
    data: { type: UserInputType },
  },
  resolve: (user) => Error("Not Implemented Yet")
};
