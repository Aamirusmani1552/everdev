/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query GetTransactionData{\n            blockchain{\n                  account(address:\"0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d\"){\n                transactions{\n                  edges{\n                    node{\n                      id\n                      destroyed\n                      hash\n                    }\n                  }\n                }\n              }\n            }\n          }": types.GetTransactionDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query GetTransactionData{\n            blockchain{\n                  account(address:\"0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d\"){\n                transactions{\n                  edges{\n                    node{\n                      id\n                      destroyed\n                      hash\n                    }\n                  }\n                }\n              }\n            }\n          }"): (typeof documents)["\n        query GetTransactionData{\n            blockchain{\n                  account(address:\"0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d\"){\n                transactions{\n                  edges{\n                    node{\n                      id\n                      destroyed\n                      hash\n                    }\n                  }\n                }\n              }\n            }\n          }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;