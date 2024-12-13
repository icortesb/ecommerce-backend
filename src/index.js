import express from 'express';

process.loadEnvFile({ path: '.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(process.env.PORT || 8080 , () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});