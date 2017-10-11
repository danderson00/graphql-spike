const tools = require('graphql-tools')

const typeDefs = `
  type Query {
    site(id: String): Site
    sites: [Site]
    building(id: String): Building
    buildings(siteId: String): [Building]
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
  }
`

module.exports = knex => {
  const resolvers = {
    Query: {
      site: (root, { id }) => knex('sites').where({ id }),
      sites: () => knex('sites'),
      building: (root, { id }) => knex('buildings').where({ id }),
      buildings: (root, { siteId }) => knex('buildings').where({ siteId })
    },
    Site: {
      buildings: root => knex('buildings').where({ siteId: root.id })
    },
    Building: {
      site: root => knex('sites').where({ id: root.siteId })
    }
  }

  return tools.makeExecutableSchema({ typeDefs, resolvers })
}