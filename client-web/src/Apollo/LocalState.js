export const resolvers = {
  Query: {
    isLoggedIn: () => Boolean(localStorage.getItem("token")) || false, // Boolean(null)은 false
  },
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
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
