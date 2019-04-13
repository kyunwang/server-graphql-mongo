import { Cat } from './models/Cat';

export const resolvers = {
	Query: {
		hello: () => 'hello',
		getCats: () => Cat.find(),
	},
	Mutation: {
		createCat: async (_, args) => {
			const { name } = args;
			const kitty = new Cat({ name });
			await kitty.save();
			return kitty;
		},
	},
};
