const { gql } = require('apollo-server-express');

export const typeDefs = gql`
	type Query {
		hello: String!
		getCats: [Cat!]!
	}

	type Cat {
		id: ID! # ID is an apollo type(String like)
		name: String!
	}

	type Mutation {
		createCat(name: String!): Cat!
	}
`;
