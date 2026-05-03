import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 350})
    const isMobile = useMediaQuery({maxWidth: 767 })
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // const controls = useControls('HackerRoom',{
    //     positionX:{
    //         value:2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY:{
    //         value:2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ:{
    //         value:2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     rotationY:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     rotationZ:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     scale:{
    //         value:0.05,
    //         min:0.01,
    //         max:5
    //     }
    // });

    return (
        <section className={"min-h-screen w-full flex flex-col relative"}>
            <div className="w-full mx-auto flex flex-col mt-20 sm:mt-36 c-space gap-3">
                <p className={"text-white text-center text-xl sm:text-2xl font-bold font-generalsans"}>Hii, I am Fady<span className="waving-hand">👋🏻</span></p>
                <p className={"hero_tag text-gray-400"}>Building Products</p>

                <div className="w-full h-full inset-0 absolute">
                    {/*<Leva />*/}
                    <Canvas className={"w-full h-full"}>
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0,0,25]} />
                            <HackerRoom
                                // scale={controls.scale}
                                // position={[controls.positionX, controls.positionY, controls.positionZ]}
                                // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={isMobile ? [0.2, -3.15, 0] : [-6.0, -3.15, 0]}
                                // scale={isMobile ? 0.06 : 0.1}
                                // position={isMobile ? [0.5, -4, 3] : [1, -7.5, 2]}
                                // rotation={isMobile ? [0.4, -3.15, 0] : [-5.8, -3.15, 0]}
                            />
                            <ambientLight intensity={1}/>
                            <directionalLight intensity={1} position={[10,10,10]}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Hero
