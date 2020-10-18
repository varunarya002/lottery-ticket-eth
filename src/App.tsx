import React, { useEffect, useState } from 'react';
import './App.css';
import { web3 } from './web3';
import lottery from './lottery';

const App = () => {
  web3.eth.getAccounts().then(console.log);

  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');
  const [lotteryValue, setLotteryValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    })();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setLotteryValue(e.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();
      setMessage('Processing your request. It would take approximately 15-30 seconds');
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(lotteryValue, 'ether')
      });
      setMessage('You have successfully registered for the lottery. Referesh your page to see the changes');
    } catch (err) {
      setMessage('An error occurred while processing your request ' + err.message);
    }
  }

  const handleWinner = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const accounts = await web3.eth.getAccounts();
      setMessage('Processing your request. It would take approximately 15-30 seconds');
      await lottery.methods.pickWinner().send({
        from: accounts[0],
      });
      setMessage('Winner has been picked. Referesh your page to see the changes');
    } catch (err) {
      setMessage('An error occurred while processing your request ' + err.message);
    }
  }

  return (
    <div style={{ padding: '10px' }}>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by: {manager}</p>
      <p>Total players: {players.length}</p>
      <ul>
        {players.map((p) => <li>{p}</li>)}
      </ul>
      <span>Balance: {web3.utils.fromWei(balance, 'ether')}</span>
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>Want to try your luck?</h2>
        <div>
          <label style={{ marginRight: "10px" }}>Enter the amount of ether</label>
          <input onChange={handleChange} value={lotteryValue} />
        </div>
        <button>Enter</button>
      </form>
      <hr />
      <div>
        <h2>Pick a winner</h2>
        <button onClick={handleWinner}>Click</button>
      </div>
      <hr />
      <div>
        {message}
      </div>
    </div>
  );
}

export default App;
