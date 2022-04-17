const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const colors = require('colors');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.CONNECTION_URL);
mongoose.connection.once('open', () => {
  console.log(
    'Connection to database has been established successfully'.yellow
  );
});

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Hello World..');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}...`.magenta);
});
