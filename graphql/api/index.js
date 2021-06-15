const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('graphql-tools');

const userSchema = require('./user/schema/user.graphql');
const userResolvers = require('./user/resolvers');
const UsersAPI = require('./user/datasource');

const server = new ApolloServer({ 
    typeDefs: mergeTypeDefs([userSchema]),
    resolvers: [userResolvers],
    dataSources: () => ({
        usersAPI: new UsersAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`);
});