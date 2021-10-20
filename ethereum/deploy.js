const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const compiledFile = require('./compile');

const custom_interface = compiledFile.abi;
const bytecode = compiledFile.evm.bytecode.object;
console.log("INTERFACE", custom_interface);

const mnemonicPhrase = 'vocal rate carbon child scout dutch consider base deer whale prevent sell';
const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  providerOrUrl: 'https://rinkeby.infura.io/v3/dc2004f19de443fc9ce82aa11b28e624'
});
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(custom_interface)
    .deploy({ data: '0x' + bytecode })
    .send({ gas: 1000000, from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy().then(console.log);