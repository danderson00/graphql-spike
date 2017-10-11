const express = require('express')
const graphql = require('express-graphql')
const knex = require('knex')
const schema = require('./schema')

const app = express()
const db = knex({
  client: 'mssql',
  connection: {
    host : 'localhost',
    user : 'sa',
    password : 'abc123',
    database : 'graphql'
  }
})

app.use('/graphql', graphql({
  schema: schema(db),
  graphiql: true
}))

app.listen(3001, () => console.log("Listening on port 3001"))