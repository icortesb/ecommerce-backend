import express from 'express';
import cors from 'cors';
import Database from './src/dao/mongo/db/db.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import { router } from './src/routes/index.routes.js';

process.loadEnvFile('.env');

const app = express();

app.use(cors());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ecommerce.lbwne.mongodb.net/ecommerce` }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    autoRemove: 'interval',
    autoRemoveInterval: 10
    }));

app.use(router);

app.listen(process.env.PORT || 8080 , () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
  Database.getInstance();
});