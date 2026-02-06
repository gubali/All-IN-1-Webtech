import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type Query {
   greeting:String
   fruits:[String]
  }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello world!',
        fruits: () => ['Apple', "Banana", "Orange"]
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server runninh ${url}`);