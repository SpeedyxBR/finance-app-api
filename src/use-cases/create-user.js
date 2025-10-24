import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user';

export class CreateUserUseCase { 
    async execute(createUserParams) {
        //todo: implementar a lógica de criação de usuário

        //gerar um id único para o usuário
        const userId = uuidv4();

        //criptografar a senha do usuário
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

        //inserir o usuário no banco de dados
        const user = await PostgresCreateUserRepository.execute({
            id: userId,
            first_name: createUserParams.first_name,
            last_name: createUserParams.last_name,
            email: createUserParams.email,
            password: hashedPassword
        });
        //chamar o repositório para criar o usuário
        const postgresCreateUserRepository = new PostgresCreateUserRepository();

        const createdUser = await postgresCreateUserRepository.execute(user);

        //retornar o usuário criado
        return createdUser;
    }
}