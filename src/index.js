const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		// Defined for both new and existing servers
		typeDefs,
		resolvers,
	});

	server.applyMiddleware({ app }); // app is from an existing express pp

	await mongoose.connect('mongodb://localhost:27017/test', {
		useNewUrlParser: true,
	});

	app.listen({ port: 4000 }, () => {
		console.log(`Server ready at http://127.0.0.1:4000${server.graphqlPath}`);
	});
};

startServer();
