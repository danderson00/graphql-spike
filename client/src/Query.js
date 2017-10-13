import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from './relay'

const Error = props => <span>Error occurred</span>
const Loading = props => <span>Loading</span>

export const Query = props =>
  <QueryRenderer
    environment={environment}
    query={props.query}
    render={result => {
      if (result.error)
        return <Error error={result.error} />

      if (result.props)
        return props.render(result.props)

      return <Loading />
    }} />

