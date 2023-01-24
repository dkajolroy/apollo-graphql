const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type UserTypeSchema {
    name: String!
    username: String!
    age: Int!
    id: Int
  }

  type Query {
    users: [UserTypeSchema]
  }
`;
