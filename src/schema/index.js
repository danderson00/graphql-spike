const tools = require('graphql-tools')
const fs = require('fs')
const path = require('path')

const typeDefs = fs.readFileSync(path.join(__dirname, '../../client/src/schema.graphql'), 'utf8')

module.exports = knex => {
  const resolvers = {
    Query: {
      site: (root, { id }) => knex('sites').where({ id }).first(),
      sites: () => knex('sites'),
      building: (root, { id }) => knex('buildings').where({ id }).first(),
      buildings: (root, { siteId }) => knex('buildings').where({ siteId })
    },
    Mutation: {
      addBuilding: (root, { id, name, siteId }) => knex('buildings').insert({ id, name, siteId }).then(() => ({ id, name, siteId }))
    },
    Site: {
      buildings: root => knex('buildings').where({ siteId: root.id })
    },
    Building: {
      site: root => knex('sites').where({ id: root.siteId }).first()
    }
  }

  return tools.makeExecutableSchema({ typeDefs, resolvers })
}