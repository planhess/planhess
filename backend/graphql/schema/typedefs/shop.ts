import { gql } from "apollo-server";

const shop = gql`
  type Shop {
    id: String!
  }
  type Query {
    addShopResolver: Shop
  }
`;

const addShopResolver = () => console.log("test2");

module.exports = {
  shop,
  addShopResolver,
};
