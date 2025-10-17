import 'dotenv/config';
import express from 'express';
import { PostgresHelper } from './src/db/postgres/helper.js';

const app = express();

app.get('/', async (req, res) => {
  try {
    const results = await PostgresHelper.query('SELECT * FROM users');
    res.send(JSON.stringify(results));
  } catch (error) {
    console.error('Erro ao executar query:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
