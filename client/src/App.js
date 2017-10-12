import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    )
  }
}

export default createFragmentContainer(App, graphql`query AppQuery { sites { id, name, buildings { id, name } } }`)
