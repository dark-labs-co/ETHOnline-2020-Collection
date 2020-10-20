import React from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';
import PurchaseUi from './components/purchaseUi/PurchaseUi'
import { ContractABI } from './ContractABI'

function App() {

  const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/c350cd4f692e4c588510ad46e77529f1"));
  web3.eth.defaultAccount = web3.eth.accounts[0];

  const remixContract = new web3.eth.Contract(
    ContractABI,
    "0x32e4051c4409eE9EdD854f56B166493A056402e2"
  );
  let RemixContract = remixContract
  console.log("🔐 RemixContract", RemixContract)

  let { methods } = remixContract
  console.log("🔐 RemixContract", methods)
  return (
    <div className="App">
      <PurchaseUi
        remixContract={RemixContract}
        methods={methods}
      />
    </div>
  );
}

export default App;
