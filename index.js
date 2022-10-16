const express = require('express');
const cors = require('cors');

// MongoDB Mongoose imports
require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


// GraphQL Imports
// Import superhero graphql schema as a document then select the string
var importNode = require('graphql-import-node/register');
const superhero = require('./graphql/superhero.graphql');
const { stringify } = require('nodemon/lib/utils');
var { buildSchema } = require('graphql');
var { graphqlHTTP } = require('express-graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(superhero.loc.source.body);

// The root provides a resolver function for each API endpoint
const root = require('./graphql/resolvers.js');

var app = express();

app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');