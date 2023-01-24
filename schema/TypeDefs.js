const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type UserTypeSchema {
    name: String!
    username: String!
    age: Int!
    id: ID!
    friends: [UserTypeSchema]
  }

  type Query {
    users: [UserTypeSchema]
    user(id: ID): UserTypeSchema!
  }
`;
