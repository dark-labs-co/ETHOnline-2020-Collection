import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3"
import { Contract } from "@ethersproject/contracts";
import { Web3Provider, getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, Link } from "./components";
import { web3Modal, logoutOfWeb3Modal } from './utils/web3Modal'
import logo from "./ethereumLogo.png";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import { ContractABI } from "./ContractABI"
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
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, setProvider] = useState();

  const [rand, setRand] = useState()

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
    <div>
      <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} />
      <Scene3d
        remixContract={RemixContract}
        methods={methods}
      />
    </div>
  );
}

export default App;
