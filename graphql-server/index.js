const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Schema/schema.js");
const resolvers = require("./Resolvers/resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
