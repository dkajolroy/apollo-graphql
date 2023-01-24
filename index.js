const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("listening on " + url);
});
