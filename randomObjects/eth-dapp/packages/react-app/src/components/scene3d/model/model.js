import React, { Suspense, useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "react-three-fiber";

function ModelObj({ id, posX, posY, posZ, type, colorNum }) {
    console.log('colorNum', colorNum)
    return (
        <mesh
            visible geometry={type}
            key={id}
            rotation={[posX, posY, posZ]}
            position={[0, posY, 0]}
        >
            {colorNum == 0 &&
                <meshStandardMaterial
                    attach="material"
                    color="red"
                    roughness={0.72}
                />
            }
            {colorNum == 1 &&
                <meshStandardMaterial
                    attach="material"
                    color="red"
                    roughness={0.72}
                />
            }
            {colorNum == 2 &&
                <meshStandardMaterial
                    attach="material"
                    color="yellow"
                    roughness={0.72}
                />
            }
            {colorNum == 3 &&
                <meshStandardMaterial
                    attach="material"
                    color="green"
                    roughness={0.72}
                />
            }
            {colorNum == 4 &&
                <meshStandardMaterial
                    attach="material"
                    color="blue"
                    roughness={0.72}
                />
            }
            {colorNum == 5 &&
                <meshStandardMaterial
                    attach="material"
                    color="purple"
                    roughness={0.72}
                />
            }
            {colorNum == 6 &&
                <meshStandardMaterial
                    attach="black"
                    color="blue"
                    roughness={0.72}
                />
            }
            {colorNum == 7 &&
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.72}
                />
            }
            {colorNum == 8 &&
                <meshStandardMaterial
                    attach="material"
                    color="darkGrey"
                    roughness={0.72}
                />
            }
            {colorNum == 9 &&
                <meshStandardMaterial
                    attach="material"
                    color="lightGrey"
                    roughness={0.72}
                />
            }
        </mesh>
    )
}

function Stack({ nodes, random }) {

    let color = String(random).charAt(0)

    let ranObj = [
        {
            id: 0,
            arr: String(random).charAt(0),
            arrShift0: String(random).charAt(1),
            arrShift1: String(random).charAt(2)
        },
        {
            id: 1,
            arr: String(random).charAt(3),
            arrShift0: String(random).charAt(4),
            arrShift1: String(random).charAt(5)
        },
        {
            id: 2,
            arr: String(random).charAt(6),
            arrShift0: String(random).charAt(7),
            arrShift1: String(random).charAt(8)
        },
        {
            id: 3,
            arr: String(random).charAt(9),
            arrShift0: String(random).charAt(10),
            arrShift1: String(random).charAt(11)
        },
        {
            id: 4,
            arr: String(random).charAt(12),
            arrShift0: String(random).charAt(13),
            arrShift1: String(random).charAt(14)
        },
        {
            id: 5,
            arr: String(random).charAt(15),
            arrShift0: String(random).charAt(16),
            arrShift1: String(random).charAt(17)
        },
        {
            id: 6,
            arr: String(random).charAt(18),
            arrShift0: String(random).charAt(19),
            arrShift1: String(random).charAt(20)
        },
        {
            id: 7,
            arr: String(random).charAt(21),
            arrShift0: String(random).charAt(22),
            arrShift1: String(random).charAt(23)
        },
        {
            id: 8,
            arr: String(random).charAt(24),
            arrShift0: String(random).charAt(25),
            arrShift1: String(random).charAt(26)
        },
        {
            id: 9,
            arr: String(random).charAt(27),
            arrShift0: String(random).charAt(28),
            arrShift1: String(random).charAt(29)
        },
        {
            id: 10,
            arr: String(random).charAt(30),
            arrShift0: String(random).charAt(31),
            arrShift1: String(random).charAt(32)
        },
        {
            id: 11,
            arr: String(random).charAt(33),
            arrShift0: String(random).charAt(34),
            arrShift1: String(random).charAt(35)
        },
        {
            id: 12,
            arr: String(random).charAt(36),
            arrShift0: String(random).charAt(37),
            arrShift1: String(random).charAt(38)
        },
        {
            id: 13,
            arr: String(random).charAt(39),
            arrShift0: String(random).charAt(40),
            arrShift1: String(random).charAt(41)
        },
        {
            id: 14,
            arr: String(random).charAt(42),
            arrShift0: String(random).charAt(43),
            arrShift1: String(random).charAt(44)
        },
        {
            id: 15,
            arr: String(random).charAt(45),
            arrShift0: String(random).charAt(46),
            arrShift1: String(random).charAt(47)
        },
        {
            id: 16,
            arr: String(random).charAt(48),
            arrShift0: String(random).charAt(49),
            arrShift1: String(random).charAt(50)
        },
        {
            id: 17,
            arr: String(random).charAt(51),
            arrShift0: String(random).charAt(52),
            arrShift1: String(random).charAt(53)
        },
        {
            id: 18,
            arr: String(random).charAt(54),
            arrShift0: String(random).charAt(55),
            arrShift1: String(random).charAt(56)
        },
        {
            id: 19,
            arr: String(random).charAt(57),
            arrShift0: String(random).charAt(58),
            arrShift1: String(random).charAt(59)
        },
        {
            id: 20,
            arr: String(random).charAt(60),
            arrShift0: String(random).charAt(61),
            arrShift1: String(random).charAt(62)
        },
        {
            id: 21,
            arr: String(random).charAt(63),
            arrShift0: String(random).charAt(64),
            arrShift1: String(random).charAt(65)
        },
        {
            id: 22,
            arr: String(random).charAt(66),
            arrShift0: String(random).charAt(67),
            arrShift1: String(random).charAt(68)
        },
        {
            id: 23,
            arr: String(random).charAt(69),
            arrShift0: String(random).charAt(70),
            arrShift1: String(random).charAt(71)
        },
        {
            id: 24,
            arr: String(random).charAt(72),
            arrShift0: String(random).charAt(73),
            arrShift1: String(random).charAt(74)
        },
        {
            id: 25,
            arr: String(random).charAt(75),
            arrShift0: String(random).charAt(76),
            arrShift1: String(random).charAt(77)
        }

    ]

    console.log("ranObj", ranObj)

    const object = ranObj.map((ran) => <>
        {ran.arr === "0" &&
            <ModelObj
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
                colorNum={color}
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
