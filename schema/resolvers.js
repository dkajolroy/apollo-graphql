const { fakeData } = require("../fakeData");

exports.resolvers = {
  Query: {
    users() {
      return fakeData;
    },
  },
};
