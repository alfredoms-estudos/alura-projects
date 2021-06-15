const { GraphQLScalarType } = require('graphql');

const userResolvers = {
    CustomResponse: {
        __resolveType(obj, context, info) {
            return false
        },
    },
    RoleType: {
        ESTUDANTE: 'ESTUDANTE',
        DOCENTE: 'DOCENTE',
        COORDENACAO: 'COORDENACAO'
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'String de data e hora no formato ISO-8601',
        serialize: value => value.toISOString(),
        parseValue: value => new Date(value),
        parseLiteral: ast => new Date(ast.value)
    }),
    Query: {
        users: (parent, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (parent, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        addUser: (root, { user, createdAt }, { dataSources }) => dataSources.usersAPI.addUser({ ...user, createdAt }),
        updateUser: (root, { id, user }, { dataSources }) => dataSources.usersAPI.updateUser({ id, ...user }),
        deleteUser: (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
    }
};

module.exports = userResolvers;