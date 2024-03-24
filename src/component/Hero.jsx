
import { Environment, PresentationControls } from '@react-three/drei';
import { BMW } from './BMW';
import { useThree, useFrame, } from '@react-three/fiber'
import { Suspense, useRef } from 'react';
import { BMW2 } from './BMW2';
// import * as THREE from "three"



export const Lighting = () => {
    const lightRef = useRef()
    const lightRef2 = useRef()
    const lightRef3 = useRef()

    // useHelper(lightRef, THREE.DirectionalLightHelper, 1)
    // useHelper(lightRef2, THREE.DirectionalLightHelper, 1)
    // useHelper(lightRef3, THREE.DirectionalLightHelper, 1)
    return (
        <>
            {/* <Environment preset="sunset" /> */}
            <ambientLight intensity={2} />
            <directionalLight intensity={2} position={[0, 2, 4]} castShadow ref={lightRef} />
            <spotLight ref={lightRef2} position={[1, 1.5, 3]} intensity={7} />
            <spotLight ref={lightRef3} position={[-3.5, 2, -1]} intensity={5} />
        </>
    )
}

export const Hero = () => {
    const { width, height } = useThree((state) => state.viewport)


    return (
        <>
            {/* <OrbitControls /> */}
            <PresentationControls polar={[0, 0, 0]} snap={[0, 0, 0]} >
                <Lighting />
                <mesh >
                    <BMW scale={0.9} position-y={-1} position-z={1} />
                    <meshStandardMaterial />
                </mesh>
            </PresentationControls  >
            <mesh rotation-x={-Math.PI / 2} position={[0, -1.5, 0]}>
                <boxGeometry args={[width, 4.5]} />
                <meshStandardMaterial />
            </mesh>

        </>
    )
}
