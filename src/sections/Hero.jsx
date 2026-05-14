import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import { ReactLogo } from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import JavascriptLogo from "../components/JavascriptLogo.jsx";
import TailwindLogo from "../components/TailwindLogo.jsx";
import ThreeLogo from "../components/ThreeLogo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 320})
    const isMobile = useMediaQuery({maxWidth: 425 })
    const isTablet = useMediaQuery({maxWidth: 768})
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
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    // scale={controls.scale}
                                    // position={[controls.positionX, controls.positionY, controls.positionZ]}
                                    // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={isMobile ? [0.2, -3.15, 0] : [0.2, -3.15, 0]}
                                    // scale={isMobile ? 0.06 : 0.1}
                                    // position={isMobile ? [0.5, -4, 3] : [1, -7.5, 2]}
                                    // rotation={isMobile ? [0.4, -3.15, 0] : [-5.8, -3.15, 0]}
                                />
                            </HeroCamera>
                            <group>
                                <ReactLogo
                                    position={sizes.reactLogoPosition}
                                />
                                <JavascriptLogo
                                    position={sizes.javascriptLogoPosition}
                                    scale={sizes.javascriptLogoScale}
                                />
                                <TailwindLogo
                                    position={sizes.tailwindLogoPosition}
                                    rotation={[2,-0.2,0]}
                                    scale={sizes.tailwindLogoScale}
                                />
                                <ThreeLogo
                                    position={sizes.threeLogoPosition}
                                    scale={sizes.threeLogoScale}
                                    rotation={[1,0.2,0]}
                                />
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight intensity={1} position={[0,10,10]}/>
                        </Suspense>
                    </Canvas>
                </div>

                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Contact Me" isBeam containerClass={"sm:w-fit w-full sm:min-w-96"}/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
