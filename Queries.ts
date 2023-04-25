import {gql} from "graphql-request";

export const GET_TRANSACTION_DATA = gql`
        query GetTransactionData{
            blockchain{
                  account(address:"0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d"){
                transactions{
                  edges{
                    node{
                      id
                      destroyed
                      hash
                    }
                  }
                }
              }
            }
          }`;

