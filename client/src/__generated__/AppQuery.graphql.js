/**
 * @flow
 * @relayHash af677e142c07f7851192d68b9aaab3e8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +sites: ?$ReadOnlyArray<?{|
    +id: ?string;
    +name: ?string;
    +buildings: ?$ReadOnlyArray<?{|
      +id: ?string;
      +name: ?string;
    |}>;
  |}>;
|};
*/


/*
query AppQuery {
  sites {
    id
    name
    buildings {
      id
      name
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Site",
        "name": "sites",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Building",
            "name": "buildings",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Site",
        "name": "sites",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Building",
            "name": "buildings",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  sites {\n    id\n    name\n    buildings {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
