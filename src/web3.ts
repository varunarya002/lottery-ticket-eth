import Web3 from 'web3';

declare global {
    interface Window { web3: any, ethereum: any }
}
window.web3 = window.web3 || {};

const web3 = new Web3(window.web3.currentProvider || "ws://localhost:8545");
window.ethereum.enable();

export { web3 };