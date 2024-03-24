import { Scroll, ScrollControls, Text } from "@react-three/drei"
import { Hero } from "./Hero"
import { Hero2 } from "./Hero2"
import { useThree } from "@react-three/fiber"


export const Scene = () => {
    // const { width, height } = useThree((state) => state.viewport)

    return (
        <>
            <ScrollControls pages={2}>
                <Scroll>
                    <Text font={"font/Poppins.ttf"} position={[0, 1, 0]} fontSize={2.3}>
                        BMW
                        <meshBasicMaterial color={"white"} toneMapped={false} />
                    </Text>
                    <Hero />
                </Scroll>
                
                <Scroll>
                    <Text font="font/Poppins.ttf" position={[0, -3.6, 0]} fontSize={2.3}>
                        ABOUT
                        <meshBasicMaterial color={"white"} toneMapped={false} />
                    </Text>
                    <Hero2 />
                </Scroll>
            </ScrollControls >
        </>
    )
}

