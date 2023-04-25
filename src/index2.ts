import { graphql } from './gql/gql';
import { GET_TRANSACTION_DATA } from '../Queries';
import { GetTransactionDataDocument, GetTransactionDataQuery } from './gql/graphql';
  const url = "https://devnet.evercloud.dev/223ed117967a44f9ad7a5f01f67d04da/graphql"

  async function main() {
    console.log(graphql)
  } 

  main()