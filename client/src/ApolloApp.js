import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, graphql, gql } from 'react-apollo'
import uuid from 'uuid'

const client = new ApolloClient()

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <SitesListWithData />
          <AddSiteWithMutation />
        </div>
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

const addSiteMutation = gql`mutation addSite($id: String!, $name: String!) { addSite(id: $id, name: $name) { id, name } }`
class AddSite extends Component {
  render() {
    return (
      <div>
        Name: <input onChange={e => this.setState({ name: e.target.value })} />
        <button onClick={() => {
          this.props.mutate({ variables: { id: uuid.v4(), name: this.state.name }})
        }}>Save</button>
      </div>
    )
  }
}
const AddSiteWithMutation = graphql(addSiteMutation)(AddSite)