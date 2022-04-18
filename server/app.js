const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const colors = require('colors');

const app = express();
const PORT = 5000;

mongoose.connect(process.env.CONNECTION_URL);
mongoose.connection.once('open', () => {
  console.log(
    'Connection to database has been established successfully'.yellow
  );
});

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

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
