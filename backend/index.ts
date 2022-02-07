import { ApolloServer, gql } from "apollo-server";
import {
  shopSchema,
  getAllShops,
  getShopById,
} from "./graphql/schema/typedefs/shop";
const typeDefs = gql`
  ${shopSchema}
`;
const resolvers = {
  Query: {
    getAllShops,
    getShopById,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
const port = 4000;
server
  .listen({
    port: process.env.NODE_ENV === "development" ? port : process.env.PORT,
  })
  .then(({ url }: any) => {
    console.log(`🚀  Server ready at ${url}`);
  });
