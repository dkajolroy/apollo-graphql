const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type UserTypeSchema {
    name: String!
    username: String!
    age: Int!
    id: ID!
    country: CountryType!
    friends: [UserTypeSchema]
  }

  enum CountryType {
    BD
    IN
    US
    UK
  }

  type Query {
    users: [UserTypeSchema]
    user(id: ID): UserTypeSchema!
  }
`;
