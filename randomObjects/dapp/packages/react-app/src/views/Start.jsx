import React, { useCallback, useEffect, useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, AddressInput, Balance } from "../components";
import { useContractReader, useEventListener } from "../hooks";
import { parseEther, formatEther } from "@ethersproject/units";

export default function Start({ address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

    const [newGame, setNewGame] = useState("loading...");
    const [name, setName] = useState("Game Name");
    const [rules, setRules] = useState("Game Rules");
    const [scoring, setScoring] = useState("Game Scoring");
    const [p1, setP1] = useState("0xb161eac6A677F873b312B3762271e6215E6313Fe");
    const [amount, setAmount] = useState(1);

    // keep track of a variable from the contract in the local React state:
    const game = useContractReader(readContracts, "YourContract", "game")
    console.log("🤗 game:", game)


    // // keep track of a variable from the contract in the local React state:
    // const seller = useContractReader(readContracts, "PurchaseContract", "getSeller")
    // console.log("🤗 seller:", seller)
    // const buyer = useContractReader(readContracts, "PurchaseContract", "getBuyer")
    // console.log("🤗 buyer:", buyer)
    // const state = useContractReader(readContracts, "PurchaseContract", "getState")
    // console.log("🤗 state:", state)
    //📟 Listen for broadcast events
    // const setGameEvents = useEventListener(readContracts, "YourContract", "SetGame", localProvider, 1);
    // console.log("📟 SetGame events:", setGameEvents)

    return (
        <div>
            <h2>{address}</h2>

            <div className={'section--wrapper'}>
                <h3>Name</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={'section--wrapper'}>
                <h3>Rules</h3>
                <input
                    type="text"
                    value={rules}
                    onChange={(e) => setRules(e.target.value)}
                />
            </div>

            <div className={'section--wrapper'}>
                <h3>Scoring</h3>
                <input
                    type="text"
                    value={scoring}
                    onChange={(e) => setScoring(e.target.value)}
                />
            </div>

            <div className={'section--wrapper'}>
                <h3>Wager</h3>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className={'section--wrapper'}>
                <h3>Connect</h3>
                <input
                    type="text"
                    value={p1}
                    onChange={(e) => setP1(e.target.value)}
                />
            </div>

            <div className={'section--wrapper'}>

            </div>


            <Button onClick={() => {
                /* look how you call setGame on your contract: */
                tx(writeContracts.PurchaseContract.transferFrom(address, p1, amount))
            }}>Transfer From
      </Button>

            <Button onClick={() => {
                /* look how you call setGame on your contract: */
                tx(writeContracts.PurchaseContract.transfer(p1, amount))
            }}>Transfer
      </Button>


            <button
                value={amount}
                onClick={(e) => setAmount(e.target.value)}
            >
                Approve
      </button>

            {/*
        ⚙️ Here is an example UI that displays and sets the game in your smart contract:
      */}
            <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
                <h2>Example UI:</h2>


                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.PurchaseContract.confirmPurchase())
                }}>confirmPurchase</Button>

                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.PurchaseContract.confirmReceived())
                }}>confirmReceived</Button>

                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.PurchaseContract.abort())
                }}>abort</Button>

                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.IncramentContract.transferTok(p1))
                }}>transfer</Button>

                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.IncramentContract.Incrementer())
                }}>incrament</Button>

                <Button onClick={() => {
                    /* look how you call setGame on your contract: */
                    tx(writeContracts.IncramentContract.increment())
                }}>incrament</Button>

                <h4>game: {game}</h4>


                <div style={{ margin: 8 }}>
                    <Input onChange={(e) => { setNewGame(e.target.value) }} />
                    <Button onClick={() => {
                        console.log("newGame", newGame)
                        /* look how you call setGame on your contract: */
                        tx(writeContracts.YourContract.confirmPurchase(newGame))
                    }}>Set Game</Button>
                </div>

                <Divider />

        Your Address:
      <Address
                    value={address}
                    ensProvider={mainnetProvider}
                    fontSize={16}
                />

                <Divider />

                {  /* use formatEther to display a BigNumber: */}
                <h2>Your Balance: {yourLocalBalance ? formatEther(yourLocalBalance) : "..."}</h2>

        OR

      <Balance
                    address={address}
                    provider={localProvider}
                    dollarMultiplier={price}
                />

                <Divider />


                {  /* use formatEther to display a BigNumber: */}
                <h2>Your Balance: {yourLocalBalance ? formatEther(yourLocalBalance) : "..."}</h2>

                <Divider />



        Your Contract Address:
      <Address
                    value={readContracts ? readContracts.YourContract.address : readContracts}
                    ensProvider={mainnetProvider}
                    fontSize={16}
                />

                <Divider />

                <div style={{ margin: 8 }}>
                    <Button onClick={() => {
                        /* look how you call setGame on your contract: */
                        tx(writeContracts.YourContract.setGame("🍻 Cheers"))
                    }}>Set Game to "🍻 Cheers"</Button>
                </div>

                <div style={{ margin: 8 }}>
                    <Button onClick={() => {
                        /*
                          you can also just craft a transaction and send it to the tx() transactor
                          here we are sending value straight to the contract's address:
                        */
                        tx({
                            to: writeContracts.YourContract.address,
                            value: parseEther("0.001")
                        });
                        /* this should throw an error about "no fallback nor receive function" until you add it */
                    }}>Send Value</Button>
                </div>

                <div style={{ margin: 8 }}>
                    <Button onClick={() => {
                        /* look how we call setGame AND send some value along */
                        tx(writeContracts.YourContract.setGame("💵 Paying for this one!", {
                            value: parseEther("0.001")
                        }))
                        /* this will fail until you make the setGame function payable */
                    }}>Set Game With Value</Button>
                </div>


                <div style={{ margin: 8 }}>
                    <Button onClick={() => {
                        /* you can also just craft a transaction and send it to the tx() transactor */
                        tx({
                            to: writeContracts.YourContract.address,
                            value: parseEther("0.001"),
                            data: writeContracts.YourContract.interface.encodeFunctionData("setGame(string)", ["🤓 Whoa so 1337!"])
                        });
                        /* this should throw an error about "no fallback nor receive function" until you add it */
                    }}>Another Example</Button>
                </div>

            </div>

            {/*
        📑 Maybe display a list of events?
          (uncomment the event and emit line in YourContract.sol! )
      */}
        </div >
    );
}
