const tools = require('graphql-tools')
const fs = require('fs')
const path = require('path')

const typeDefs = `
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

  type Query {
    site(id: String): Site
    sites: [Site]
    building(id: String): Building
    buildings(siteId: String): [Building]
  }

  type Mutation {
    addSite(
      id: String
      name: String
    ): Site
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = knex => {
  const resolvers = {
    Query: {
      site: (root, { id }, ast) => knex('sites').where({ id }).first(),
      sites: () => knex('sites'),
      building: (root, { id }) => knex('buildings').where({ id }).first(),
      buildings: (root, { siteId }) => knex('buildings').where({ siteId })
    },
    Mutation: {
      addSite: (root, { id, name }) => {
        const newSite = { id, name }
        return knex('sites').insert(newSite)
          .then(() => newSite)
      }
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