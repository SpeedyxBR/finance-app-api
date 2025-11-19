# Finance App API

API para um aplicativo de finanças pessoais, permitindo que os usuários gerenciem suas transações financeiras.

## Visão Geral

Este projeto é uma API RESTful construída com Node.js e Express. Ele se conecta a um banco de dados PostgreSQL para persistir os dados.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)

## Como Começar

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Instale as Dependências

Navegue até a pasta do projeto e instale as dependências do Node.js:

```bash
npm install
```

### 2. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto, copiando o exemplo do `.env.example`.

```bash
cp .env.example .env
```

Abra o arquivo `.env` e configure as variáveis, especialmente as do banco de dados e a porta da aplicação:

```
API_PORT=3001
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=finance_user
POSTGRES_PASSWORD=finance_password
POSTGRES_DB=finance_db
```

### 3. Execute o Banco de Dados com Docker

Para iniciar o contêiner do PostgreSQL, execute o seguinte comando na raiz do projeto:

```bash
docker-compose up -d
```

Isso iniciará o banco de dados na porta `5432`.

### 4. Execute as Migrações do Banco de Dados

Com o banco de dados em execução, aplique as migrações para criar as tabelas necessárias:

```bash
npm run db:migrate
```

### 5. Inicie a Aplicação

Agora você pode iniciar o servidor de desenvolvimento:

```bash
npm run start:dev
```

A API estará em execução em `http://localhost:3001`.

## Endpoints da API

### Usuários

#### `POST /api/users`

Cria um novo usuário no sistema.

**Request Body:**

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Respostas:**

-   `201 Created`: Retorna o usuário criado.
-   `400 Bad Request`: Se campos obrigatórios estiverem faltando ou forem inválidos (ex: e-mail inválido, senha curta).
-   `409 Conflict`: Se o e-mail fornecido já estiver em uso.
-   `500 Internal Server Error`: Em caso de erro inesperado no servidor.