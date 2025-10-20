import 'dotenv/config';
import fs from 'fs';
import { pool } from '../helper.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execMigrations = async () => {
  try {
    const filePath = path.join(__dirname, '01-init.sql');
    const script = fs.readFileSync(filePath, 'utf8');

    const client = await pool.connect();
    console.log('Connected to the database');
    await client.query(script);
    console.log('Migrations executed successfully');
    await client.release();
  } catch (error) {
    console.error('Error executing migrations:', error);
  }
};

execMigrations();
