import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3"
import { Contract } from "@ethersproject/contracts";
import { Web3Provider, getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { web3Modal, logoutOfWeb3Modal } from './utils/web3Modal'

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import { RandomContractABI } from "./ContractABI"
import Scene3d from './components/scene3d/scene3d'

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: ceaErc20 });
}

function WalletButton({ provider, loadWeb3Modal }) {
  return (
    <button
      className="web3Button"
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, setProvider] = useState();
  const defaultProvider = getDefaultProvider();
  /* Open wallet selection modal. */
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));
  }, []);

  /* If user has loaded a wallet before, load it automatically. */
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  React.useEffect(() => {
    if (!loading && !error && provider && provider.provider && provider.provider) {
      console.log('provider', provider.provider)
    }
  }, [loading, error, data, provider]);

  const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/c350cd4f692e4c588510ad46e77529f1"));
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var account = web3.eth.accounts[0];
  console.log(account)

  const randNumContract = new web3.eth.Contract(
    RandomContractABI,
    "0xdf9f023BaAd86B4a78385a81D1bDF7213e67571B"
  );

  let RandNumContract = randNumContract
  console.log("🔐 RandNumContract", RandNumContract)

  let { methods } = randNumContract
  console.log("🔐 RandNumContract", methods)

  return (
    <div>
      <WalletButton provider={provider} ladoWeb3Modal={loadWeb3Modal} />
      <Scene3d
        address={provider}
        randNumContract={RandNumContract}
        methods={methods}
      />
    </div>
  );
}

export default App;
