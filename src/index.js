const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const app = express();

// Schema types
const typeDefs = gql`
	type Query {
		hello: String!
	}
`;

const resolvers = {
	Query: {
		hello: () => 'hello',
	},
};

const server = new ApolloServer({
	// Defined for both new and existing servers
	typeDefs,
	resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express pp

app.listen({ port: 4000 }, () => {
	console.log(`Server ready at http://127.0.0.1:4000${server.graphqlPath}`);
});
