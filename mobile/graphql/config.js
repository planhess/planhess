import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://planhess-backend.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
