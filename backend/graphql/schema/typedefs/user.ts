import { gql } from "apollo-server";

const user = gql`
  type User {
    idUser: String!
    idUser2: String!
  }
  type Query {
    addUserResolver: User
  }
`;

const addUserResolver = () => console.log("test3");

module.exports = {
  user,
  addUserResolver,
};
