const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type User {
    name: String!
    username: String!
    age: Int!
  }
  type Query {
    users: [User!]!
  }
`;
