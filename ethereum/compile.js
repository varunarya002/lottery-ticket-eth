export let evm = undefined;
export let abi = undefined;
const path = require("path");
const fs = require("fs");
const solc = require("solc");
 
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8"); //read raw source file
 
const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

output.contracts["Lottery.sol"].Lottery = undefined;
module.exports = output.contracts["Lottery.sol"].Lottery;