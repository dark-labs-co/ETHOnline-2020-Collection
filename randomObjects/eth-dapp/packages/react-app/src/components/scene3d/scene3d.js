import React, { Suspense, useState, useEffect } from "react";
import PurchaseUi from '../purchaseUi/purchaseUi'
import { Canvas } from "react-three-fiber";

import Lighting from "./lighting/lighting"
import Room from './room/room'
import Model from './model/model'

import { Fire } from "three/examples/jsm/objects/Fire.js";

import "./styles.css";

function Loading() {
    return (
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial
                attach="material"
                color="#efefef"
                transparent
                opacity={0.6}
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
}

export default function Scene3d({ RandNumContract, methods }) {
    const [random, setRandom] = useState(21815724101579525323423942336085941416496621156280683789015544938769814098632)
    const [random0, setRandom0] = useState(79253003447599360338688543096899282606035833701842488320705609459867506032435)

    useEffect(() => {
        async function fetchVal() {
            const value = await methods.randomResult().call();
            setRandom(value)
        }
        fetchVal()
    }, [])


    return (
        <div className='logo--wrapper'>
            <>
                <Canvas className='td-scene--item' style={{ background: "#transparent" }}>
                    <Lighting random={random} />
                    <fog attach="fog" args={['white', 0, 15]} />
                    <Suspense fallback={<Loading />}>
                        <Model
                            random={random}
                            random0={random0}
                        />
                        <Room />
                    </Suspense>
                </Canvas>
                <PurchaseUi
                    RandNumContract={RandNumContract}
                    methods={methods}
                    random={random}
                />
            </>

        </div>
    );
}
