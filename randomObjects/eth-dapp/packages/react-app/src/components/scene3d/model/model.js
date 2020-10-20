import React, { Suspense, useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "react-three-fiber";

function ModelObj({ id, posX, posY, posZ, type }) {

    return (
        <mesh
            visible geometry={type}
            key={id}
            rotation={[posX, posY, posZ]}
            position={[0, posY, 0]}
        >
            <meshStandardMaterial
                attach="material"
                color="blue"
                roughness={0.72}
            />
        </mesh>
    )
}


function Stack({ nodes, random }) {
    let ranObj = [
        { id: 0, arr: String(random).charAt(0), arrShift0: String(random).charAt(2), arrShift1: String(random).charAt(2) },
        { id: 1, arr: String(random).charAt(3), arrShift0: String(random).charAt(4), arrShift1: String(random).charAt(5) },
        { id: 2, arr: String(random).charAt(6), arrShift0: String(random).charAt(7), arrShift1: String(random).charAt(8) },
        { id: 3, arr: String(random).charAt(9), arrShift0: String(random).charAt(10), arrShift1: String(random).charAt(11) },
        { id: 4, arr: String(random).charAt(12), arrShift0: String(random).charAt(13), arrShift1: String(random).charAt(14) },
        { id: 5, arr: String(random).charAt(15), arrShift0: String(random).charAt(16), arrShift1: String(random).charAt(17) },
        { id: 6, arr: String(random).charAt(18), arrShift0: String(random).charAt(19), arrShift1: String(random).charAt(20) },
    ]

    console.log("ranObj", ranObj)

    const object = ranObj.map((ran) => <>
        {ran.arr === "0" &&
            <ModelObj
                type={nodes.Cube.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "1" &&
            <ModelObj
                type={nodes.Sphere.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "2" &&
            <ModelObj
                type={nodes.Cylinder.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "3" &&
            <ModelObj
                type={nodes.Cone.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "4" &&
            <ModelObj
                type={nodes.Icosphere.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "5" &&
            <ModelObj
                type={nodes.Cube.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "6" &&
            <ModelObj
                type={nodes.Sphere.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "7" &&
            <ModelObj
                type={nodes.Cylinder.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "8" &&
            <ModelObj
                type={nodes.Cone.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "9" &&
            <ModelObj
                type={nodes.Icosphere.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
        {ran.arr === "." &&
            <ModelObj
                type={nodes.Cube.geometry}
                nodes={nodes}
                key={ran.id}
                posX={ran.arr}
                posY={ran.arrShift1}
                posZ={ran.arrShift1}
            />
        }
    </>
    );
    return (
        <>
            {object}
        </>
    )
}
{/* <mesh visible geometry={nodes.Cylinder.geometry} position={[-.8, -.5, .4]}>
                <meshStandardMaterial
                    attach="material"
                    color="blue"
                    roughness={0.1}
                />
            </mesh>
            <mesh visible geometry={nodes.Cube.geometry} position={[.9, .7, -.3]}>
                <meshStandardMaterial
                    attach="material"
                    color="#efefef"
                    roughness={0.1}
                />
            </mesh>
        </>) 
}
*/}

export default function Model({ random }) {
    const group = useRef();
    const { nodes } = useLoader(GLTFLoader, "models/stack.glb");
    const scene = useLoader(GLTFLoader, "models/stack.glb");
    console.log(scene);
    useFrame(() => {
        group.current.rotation.y += 0.005;
        //     group.current.rotation.y += 0.001;
        //     group.current.rotation.z += 0.005;
    });

    return (
        <>
            <group ref={group} position={[0, -4, -3]} scale={[.8, .8, .8]}>
                <Stack
                    // random={883854973200947346840317972683437654493926997552258111800110}
                    // random={37171192940234695788324211385084926982721129696942701500091472902497836272153}
                    // random={103319685879052806706757505111669152027123990384222649522573287478350888507615}
                    // random={21815724101579525323423942336085941416496621156280683789015544938769814098632}
                    // random={98757909644868470858395343725418864916306232486901191804096700552612668262591}
                    // random={98157910133876376128446912324858829111595504214837180170922652803973134528300}
                    random={random}
                    nodes={nodes}
                />

            </group>

        </>
    );
}
