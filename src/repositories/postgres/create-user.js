import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresCreateUserRepository {
    async execute(createUserParams) {
        const createdUser = await PostgresHelper.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;',
            [
                createUserParams.name,
                createUserParams.email,
                createUserParams.password,
            ],
        )

        return createdUser[0]
    }
}
