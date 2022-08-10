# cryptologic_challenge
## Description

Backend application writen in nodejs/typescript with simple REST architecture. Implement the ethers.js library for manage the RPC connection and fetch transactions and contracts.

Contains:
1. RPC Connection from Avalanche EVM C-Chain
2. Local MongoDB conection
3. Middleware on endpoint routes
4. 

Packages
1. Ethers
2. Express
3. MongoDB

Endpoint Description:
1. GET: transaction from RPC by txHash and contract detail `/api/detail/:txHash`
2. POST: save transaction fetched from RPC to the DB `api/transaction/` (body: {"txHash": value})
3. GET: get transaction by txHash with _decode BigNumbers_ `api/:txHash`]
4. GET: get all saved transactions from the DB with _decode BigNumbers_ `api/transaction/get-all`
5. GET: get ABI from server `/contract`

___

## Challenge

### Basic:

✅ Use web3.js or ethers.js proper methods to fetch transaction data details

✅ Fetch and save main contract ABI and bytecode and save them into a file and database

✅ Understand and parse the event log to show in a básic REST response the decoded events and its parameters

✅ Create a basic REST endpoint that once queried saves the parsed data into a MongoDB document.

✅ Create a basic REST endpoint to get the previously saved data.

### Must have:

✅ Basic error handling

✅ Basic README file

✅ Basic explaination of the work done

### Extra points:

❌ unit testing

✅ Docker build

___

## Setup
To run this project, install it locally using npm:

```
$ yarn install
$ yarn start in root folder
```




