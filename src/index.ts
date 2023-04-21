// 0:daaa303391bd8cdef6fbc62419783bdcdcd9321dac32b5fecf93ba1779d358a5
// df097152328ade2f725a8520e9767324ceb0549995821f3b48fadb580a494c55

// signer2 
// 0:51e2e29cc66875546e18b713a7208b6f55dbc4cbac1aaf14adbc7aca0c9286ef
// 66f95d2eba0191bfc4a160cc75fff8adc03bd7f2a81239bb006b6fb286f8d762

// deployed contract
// 0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d


import {TonClient} from "@eversdk/core";
import {libNode} from "@eversdk/lib-node";
import { consoleTerminal, runCommand } from "everdev";
import path from "path";

const address = "0:e245694a418cd496fe6913bfbcb6e5d2c9bff5a337219190be46ff7e11bcde0d";

TonClient.useBinaryLibrary(libNode)

const client = new TonClient({
    network: {
        endpoints: [
            "https://devnet.evercloud.dev/223ed117967a44f9ad7a5f01f67d04da/graphql"
        ],
        access_key: "f6d4f83a3dcc4496926af64e371384e8",
    },
});


const getWalletTransactions = async()=>{
    try {
        // Get account balance. 
        const query = `
        query{
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
          }`

        const {result}  = await client.net.query({query})
        console.log(`The wallet transactions are ${result.data.blockchain.account.transactions}`);
        client.close();
    }
    catch (error) {
        console.error(error);
    }
}

const getAccountBalance = async() => {
    try {
        // Get account balance. 
        const query = `
            query {
              blockchain {
                account(
                  address: "${address}"
                ) {
                   info {
                    balance(format: DEC)
                  }
                }
              }
            }`

        const {result}  = await client.net.query({query})
        console.log(`The account balance is ${result.data.blockchain.account.info.balance}`);
        client.close();
    }
    catch (error) {
        console.error(error);
    }
}


getAccountBalance();
getWalletTransactions();