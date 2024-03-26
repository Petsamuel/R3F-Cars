import React, { useState, useRef } from 'react';
import { BMW, BMW1, BMW2, BMW3 } from "./index";
import * as THREE from 'three';
import { Environment, MeshPortalMaterial, PresentationControls, RoundedBox, Text, useTexture } from '@react-three/drei'
import { Lighting } from './Hero';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';


export const PortalCard = ({ children, name, ...props }) => {
    const texture = useTexture('/texture/1.png')
    const [active, setActive] = useState(false)
    const blendRef = useRef()

    console.log(blendRef)

    useFrame((_, delta) => {
        easing.damp(blendRef.current, "blend", active ? 1 : 0, 0.2, delta)
    })



    const handleClicked = () => {
        return setActive(!active)

    }


    return (
        <group {...props}>
            {/* create a portal material */}
            <Lighting />
            <PresentationControls snap={[0, 0, 0]} polar={[0, 0, 0]}>
                <Text
                    font="font/Poppins.ttf"
                    fontSize={0.3}
                    position={[0, -1.3, 0.051]}
                    anchorY={"bottom"}
                >
                    {name}
                    <meshBasicMaterial color={"white"} toneMapped={false} />
                </Text>
                <RoundedBox args={[3, 2.9, 0.1]} onDoubleClick={handleClicked}>

                    <MeshPortalMaterial blend={active ? 1 : 0} ref={blendRef} >
                        <Lighting />
                        <mesh>
                            {children}
                            <sphereGeometry args={[9, 84, 84]} />
                            <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
                        </mesh>
                    </MeshPortalMaterial>
                </RoundedBox>
            </PresentationControls>



        </group>
    )


}

export const Hero2 = () => {



    return (
        <group position={[0, -6.3, 0]}>
            <PortalCard position-x={-3.5} rotation-y={Math.PI / 8} name={"BMW F22"}>
                <BMW position-y={-0.9} position-x={0} />
            </PortalCard >
            <PortalCard name={"BMW M4"}>
                <BMW2 position-y={-0.9} />
            </PortalCard>
            <PortalCard position-x={3.5} rotation-y={-Math.PI / 8} name={"BMW M3"}>
                <BMW3 position-y={-0.9} rotation-y={0} />
            </PortalCard>

        </group>
    )
}
