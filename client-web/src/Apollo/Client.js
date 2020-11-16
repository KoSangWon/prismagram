import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { resolvers } from "./LocalState";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: `http://localhost:4000` });

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("token");
    console.log('token', token)
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});



export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  resolvers,
});
