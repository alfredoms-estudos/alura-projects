const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getUsers() {
        const users = await this.get('/users');
        return users.map(async user => ({
            ...user,
            role: await this.get(`/roles/${user.role}`)
        }));
    }

    async getUserById(id) {
        const user = await this.get(`/users/${id}`);
        user.role = await this.get(`/roles/${user.role}`);
        return user;
    }

    async addUser(user) {
        const users = await this.get('/users');
        user.id = users.lenght + 1;
        const role = await this.get(`/roles?type=${user.role}`)

        await this.post('users', {
            ...user, role: role[0].id
        });

        return ({
            ...user,
            role: role[0]
        })
    }

    async updateUser(user) {
        const role = await this.get(`/roles?type=${user.role}`)
        await this.put(`/users/${user.id}`, {
            ...user, role: role[0].id
        });

        return ({
            code: 200,
            message: 'Atualização efetuada com sucesso!',
            user: { ...user, role: role[0] }
        })
    }

    async deleteUser(id) {
        await this.delete(`/users/${id}`);

        return ({
            code: 200,
            message: 'Remoção realizada com sucesso!'
        });
    }
};

module.exports = UsersAPI;