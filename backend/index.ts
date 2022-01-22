const { ApolloServer, gql } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const { user, addUserResolver } = require("./graphql/schema/typedefs/user");
const { shop, addShopResolver } = require("./graphql/schema/typedefs/shop");
// import { user, addUserResolver } from "./graphql/schema/typedefs/user";
const prisma = new PrismaClient();
// const Person = require("./graphql/schema/typedefs/GqlBook");
const typeDefs = gql`
  ${shop}
  ${user}
`;
const resolvers = {
  Query: {
    addShopResolver,
    addUserResolver,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
