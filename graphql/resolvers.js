import user from "../db/models/user.js";
import StatusCode from "../constants/statusCode.js";

const resolvers = {
  Query: {
    users: async () => {
      const result = await user.selectAll();
      return result.data;
    },
    user: async (_, { user_id }) => {
      const result = await user.select(user_id);
      return result.data;
    },
  },

  Mutation: {
    addUser: async (_, { user_id, user_nm }) => {
      const result = await user.insert(user_id, user_nm);
      return result.code === StatusCode.OK ? true : false;
    },
  },
};

export default resolvers;