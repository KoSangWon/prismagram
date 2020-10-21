import { ApolloClient, InMemoryCache } from "@apollo/client";
import { resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers,
});
