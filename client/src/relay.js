import fetch from 'isomorphic-fetch';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export default new Environment({
  handlerProvider: null,
  network: Network.create((operation, variables /* cacheConfig, uploadables */) => 
    fetch('/graphql', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    }).then(x => x.json())
  ),
  store: new Store(new RecordSource()),
});
