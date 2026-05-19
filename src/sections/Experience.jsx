import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import { workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className={"c-space my-12"}>
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>My Work Experience</h3>

                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                            <directionalLight intensity={1} position={[10,10,10]} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                            <Suspense fallback={<CanvasLoader/>} >
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-10 sm:px-5 px-2.5"}>
                            {workExperiences.map((experience, index) => (
                                <div key={index} className={"work-content_container group"} onClick={()=> setAnimationName(experience.animation)} onPointerEnter={()=> setAnimationName(experience.animation)} onPointerLeave={()=> setAnimationName('idle')}>
                                    <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                        <div className={"work-content_logo"}>
                                            <img src={experience.icon} alt="logo" className={"w-full h-full rounded-2xl"}/>
                                        </div>
                                        <div className={"work-content_bar"}>
                                            <span className={"work-content_dot"}></span>
                                        </div>
                                    </div>

                                    <div className={"py-5 px-2.5 sm:p-5"}>
                                        <p className={"font-bold text-white-800"}>{experience.name}</p>
                                        <p className={"font-sm mb-5"}>{experience.pos} | {experience.duration}</p>
                                        <p className={"group-hover:text-white transition-colors duration-200 ease-in-out"}>{experience.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
