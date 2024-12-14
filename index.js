import express from 'express';
import cors from 'cors';
import Database from './src/dao/mongo/db/db.js';

process.loadEnvFile('.env');

const app = express();

app.use(cors());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(process.env.PORT || 8080 , () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
  Database.getInstance();
});