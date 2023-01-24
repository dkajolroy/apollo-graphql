const { fakeData } = require("../fakeData");
// const _ = require("lodash");

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
};
