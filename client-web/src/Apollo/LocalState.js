import { LOGIN_QUERY } from "../Components/App";

export const resolvers = {
  Query: {
    isLoggedIn: () => Boolean(localStorage.getItem("token")) || false, // Boolean(null)은 false
  },
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      console.log(cache);
      localStorage.setItem("token", token);
      cache.writeQuery({query: LOGIN_QUERY,
        data: {
          isLoggedIn: true,
        },
      });

      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload(); //모든 cache를 없앰
      return null;
    },
  },
};
