import { GET_TRANSACTION_DATA } from '../Queries';
import {request} from 'graphql-request'
import {GetTransactionDataQuery} from "./generated/graphql";
  const url = "https://devnet.evercloud.dev/223ed117967a44f9ad7a5f01f67d04da/graphql"

  async function main() {
    request<GetTransactionDataQuery>(url, GET_TRANSACTION_DATA,{},{
      "X-API-KEY": `f6d4f83a3dcc4496926af64e371384e8`
    }).then(data=>{
      console.log(data.blockchain?.account?.transactions?.edges);
    }).catch(err=>{
      console.log(err);
    })
  } 

  main()