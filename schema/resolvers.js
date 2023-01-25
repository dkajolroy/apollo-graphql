const { fakeData } = require("../fakeData");

exports.resolvers = {
  Query: {
    users: () => {
      return fakeData;
    },
    user: (_, agr) => {
      const id = agr.id;
      const user = fakeData.find((x) => x.id === parseInt(id));
      return user;
    },
  },
  Mutation: {
    createUser: (_, arg) => {
      const user = arg.input;
      console.log(user);
    },
  },
};
