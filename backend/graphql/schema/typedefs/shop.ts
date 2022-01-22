import { gql } from "apollo-server";

const shop = gql`
  type Person {
    id: String!
  }
  type Query {
    addShopResolver: Person
  }
`;

const addShopResolver = () => console.log("test2");

module.exports = {
  shop,
  addShopResolver,
};
