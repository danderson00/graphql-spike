const express = require('express')
const graphql = require('express-graphql')
const knex = require('knex')
const schema = require('./schema')

const app = express()
const db = knex({
  client: 'sqlite',
  connection: {
    filename: 'data.db'
  }
})

app.use('/graphql', graphql({
  schema: schema(db),
  graphiql: true
}))

db.schema.createTableIfNotExists('sites', table => {
  table.string('id')
  table.string('name')
})
.then(() => 
  db.schema.createTableIfNotExists('buildings', table => {
    table.string('id')
    table.string('name')
    table.string('siteId').references('sites.id')
  })
)
.then(() => db('sites').insert({ id: '1', name: 'site 1' }))
.then(() => db('buildings').insert({ id: '1', name: 'building 1', siteId: '1' }))
.then(() => app.listen(3001, () => console.log("Listening on port 3001")))