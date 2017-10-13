import React from 'react'
import { graphql } from 'react-relay'
import { Query } from './Query'

export default () => (
  <Query 
    query={graphql`query AppQuery { sites { id, name } }`}
    render={data => {
      return <ul>
        {data.sites.map(site => <li key={site.id}>{site.name}</li>)}
      </ul>
    }} />
)
