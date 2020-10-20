import React, { useState, useEffect } from "react";
import "./purchaseUi.css"

export default function PurchaseUi({ address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts, remixContract, methods }) {
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
    // const remixEvents = useEventListener(methods, "RandomNumberConsumer", "randomResult");
    // console.log("📟 SetPurpose events:", remixEvents)


    // const purpose = useContractReader(remixContract, "methods", "randomResult")
    // console.log("🤗 purpose:", purpose)

    // const value = remixContract.methods.randomResult();
    // console.log('value', value);

    async function fetchVal() {
        try {
            const value = await methods.randomResult().value.call();
            console.log('value', value);
        } catch (err) {
            console.error(err);
        }
    }
    let fetcher = fetchVal()
    console.log('fetchVal', fetcher);



    return (
        <div className="purchaseUI--wrapper">
            <h3>Crypto address: {readContracts ? readContracts.YourContract.address : readContracts}</h3>
            <h3>My address: {address}</h3>
            This one of a kind object is generated using Chainlink VRF
            <button onClick={() => {
                /* look how you call setPurpose on your contract: */
                tx(remixContract.methods.getRandomNumber(123))
            }}>Get Random Number
                </button>

            { purchaseInfo &&
                <div className="purchase-open--wrapper">
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

                    <button onClick={() => {
                        /* look how you call setPurpose on your contract: */
                        tx(writeContracts.RandomNumberConsumer.getRandomNumber(12345))
                    }}>confirm
                </button>
                </div>
            }
        </div >
    )
}
