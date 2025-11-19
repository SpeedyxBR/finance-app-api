import bcrypt from 'bcrypt'
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'

export class CreateUserUseCase {
    async execute(createUserParams) {
        // criptografar a senha
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10)

        // montar dados para tabela atual (name, email, password)
        const user = {
            name: `${createUserParams.first_name} ${createUserParams.last_name}`.trim(),
            email: createUserParams.email,
            password: hashedPassword,
        }

        // chamar o repositório
        const postgresCreateUserRepository = new PostgresCreateUserRepository()

        const createdUser = await postgresCreateUserRepository.execute(user)

        return createdUser
    }
}
