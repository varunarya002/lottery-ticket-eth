import {web3} from './web3';
import {AbiItem} from "web3-utils";

const address = '0x4DEb872877Ad364EEb354e9d37Dd5d89408C074D';

const abi: AbiItem[] = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'enter',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPlayers',
        outputs: [{name: '', type: 'address'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'manager',
        outputs: [{name: '', type: 'address'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'pickWinner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{name: '', type: 'uint256'}],
        name: 'players',
        outputs: [{name: '', type: 'address'}],
        stateMutability: 'view',
        type: 'function'
    }
];

const abi2: AbiItem[] = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: "constructor"
    },
    {
        inputs: [],
        name: "enter",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "getPlayers",
        outputs: [{internalType: "address payable[]", name: "", type: "address[]"}],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "manager",
        outputs: [{internalType: "address", name: "", type: "address"}],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pickWinner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [{internalType: "uint256", name: "", type: "uint256"}],
        name: "players",
        outputs: [{internalType: "address payable", name: "", type: "address"}],
        stateMutability: "view",
        type: "function"
    }
];

export default new web3.eth.Contract(abi2, address);
