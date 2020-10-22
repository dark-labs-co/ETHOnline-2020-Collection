import React, { useState, useEffect } from "react";
import "./purchaseUi.css"
import Web3 from "web3"
import { PurchaseContractABI } from "../../ContractABI"

export default function PurchaseUi({ address, randomNumberContractMethods, random }) {
    const [purchaseInfo, setPurchaseInfo] = useState(false)
    const [firstName, setFirstName] = useState("firstName")
    const [lastName, setLastName] = useState("lastName")
    const [country, setCountry] = useState("country")
    const [state, setState] = useState("state")
    const [city, setCity] = useState("city")
    const [address1, setAddress1] = useState("address1")
    const [address2, setAddress2] = useState("address2")
    const [zipCode, setZipCode] = useState("zipCode")
    const [phoneNumber, setPhoneNumber] = useState("phoneNumber")
    const [paymentMethod, setPaymentMethod] = useState("paymentMethod")
    const [shippingOption, setShippingOption] = useState("shippingOption")

    //📟 Listen for broadcast events
    // const remixEvents = useEventListener(randomNumberContractMethods, "RandomNumberConsumer", "randomResult");
    // console.log("📟 SetPurpose events:", remixEvents)

    async function getVal() {
        const value = await randomNumberContractMethods.getRandomNumber(1222245).call()
        console.log(value)
    }

    const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/c350cd4f692e4c588510ad46e77529f1"));
    web3.eth.defaultAccount = web3.eth.accounts[0];

    const purchaseContract = new web3.eth.Contract(
        PurchaseContractABI,
        "0x0c6C5673C1fe045e62ebEA910CB89a3439FAeF0b"
    );

    let PurchaseContract = purchaseContract
    console.log("🔐 PurchaseContract", PurchaseContract)

    let { methods } = purchaseContract
    console.log("🔐 PurchaseContract", methods)
    // 90792108491894098355165641192836322243027329926467459687000418472098015569867

    async function makePurchase() {
        console.log(methods)
        const value = await methods.balanceOf("0xB8db097380315E85BcD327af435341AC5149A6c2").call()
        console.log(value)
    }
    return (
        <div className="purchaseUI--wrapper">
            <div className="purchase-expand--button">
                <button onClick={() => setPurchaseInfo(!purchaseInfo)} >
                    Pressed NFT
        </button>
            </div>
            { purchaseInfo &&
                <div className="purchase-open--wrapper">
                    Purchase
               <div className="purchase-hash--text">
                        #{random}
                    </div>
                    <input
                        className="purchase-open--input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <input
                        className="purchase-open--input"
                        type="text"
                        value={shippingOption}
                        onChange={(e) => setShippingOption(e.target.value)}
                    />
                    <button className="purchase--button" onClick={() => makePurchase()}>
                        Purchase
                </button>
                </div>
            }
        </div >
    )
}
