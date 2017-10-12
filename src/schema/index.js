const tools = require('graphql-tools')

const typeDefs = `
  type Query {
    site(id: String): Site
    sites: [Site]
    building(id: String): Building
    buildings(siteId: String): [Building]
  }

  type Mutation {
    addBuilding(
      id: String
      name: String
      siteId: String
    ): Building
  }

  type Site {
    id: String
    name: String
    buildings: [Building]
  }

  type Building {
    id: String
    name: String
    site: Site
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

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