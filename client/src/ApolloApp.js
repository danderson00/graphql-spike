import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, graphql, gql } from 'react-apollo'

const client = new ApolloClient()

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SitesListWithData />
      </ApolloProvider>
    )
  }
}


const sitesListQuery = gql`{ sites { id, name } }`

const SitesList = ({ data: { loading, error, sites }}) => {
  if(loading)
    return <p>Loading...</p>

  if(error)
    return <p>An error occurred: {error.message}</p>

  return (
    <ul>
      {sites.map(site => <li key={site.id}>{site.name}</li>)}
    </ul>
  )
}

const SitesListWithData = graphql(sitesListQuery)(SitesList)
