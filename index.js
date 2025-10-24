import 'dotenv/config';
import express from 'express';
import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const results = await PostgresHelper.query('SELECT * FROM users');
   res.send(json.stringify(results));
  } catch (error) {
    console.error('Erro ao executar query:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/api/users', async (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.status(201).send('Usuário criado com sucesso');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
