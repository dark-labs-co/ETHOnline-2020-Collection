import React from 'react'

export default function Lighting({ random }) {
    return (
        <>
            <spotLight position={[0, -10, 3.5]} intensity={.51} color="white" />
            <spotLight position={[0, -2, -1.5]} intensity={.51} color="white" />
            <spotLight position={[0, -2, 4.5]} intensity={.51} color="white" />
            <spotLight position={[1, -7, -4.5]} intensity={.51} color="white" />
        </>
    )
}
