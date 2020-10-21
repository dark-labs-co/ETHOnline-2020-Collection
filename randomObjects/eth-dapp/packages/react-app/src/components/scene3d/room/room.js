import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "react-three-fiber";

export default function Room() {
    const { nodes } = useLoader(GLTFLoader, "models/room.glb");
    const scene = useLoader(GLTFLoader, "models/room.glb");
    return (

        <group position={[0, 0, -3]} scale={[1, 1, 1]} rotation={[0, 180, 0]}>

            {/* Wall L */}
            <mesh
                visible position={[-3, 0, -4]} scale={[1, 15, 15]} geometry={nodes.Wall0.geometry}
            >
                <meshStandardMaterial
                    attach="material"
                    color="blue"
                    roughness={0.72}
                />
            </mesh>

            {/* Wall R */}
            <mesh
                visible position={[4, 0, 3]} scale={[15, 15, 1]} geometry={nodes.Wall1.geometry}
            >
                <meshStandardMaterial
                    attach="material"
                    color="#5499f6"
                    roughness={0.72}
                />
            </mesh>

            {/* Floor */}
            {/* <mesh
                        visible geometry={nodes.Floor.geometry}
                    >
                        <meshStandardMaterial
                            attach="material"
                            color="grey"
                            roughness={0.72}
                        />
                    </mesh> */}
        </group>
    )
}    
