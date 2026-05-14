import React, {Suspense, useState} from 'react'
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Computer from "../components/Computer.jsx";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const projectCount = myProjects.length;
    const currentProject = myProjects[selectedProjectIndex];
    const handleNavigation = (direction)=>{
        setSelectedProjectIndex((prevIndex)=>{
            if(direction === 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            }
            else{
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }
    return (
        <section className={"c-space my-20"} id={"work"}>
            <p className={"head-text"}>My work</p>

            <div className={"grid gap-5 grid-cols-1 lg:grid-cols-2 mt-10 w-full"}>
                <div className={"flex flex-col gap-5 relative py-10 px-5 sm:p-10 shadow-2xl shadow-black-200"}>
                    <div className={"absolute top-0 right-0"}>
                        <img src={currentProject.spotlight} alt="spotlight" className={"w-full h-96 object-cover rounded-xl"}/>
                    </div>
                    <div className={"p-3 backdrop-blur-2xl w-fit rounded-lg"} style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className={"w-10 h-10 shadow-sm"}/>
                    </div>
                    <div className={"flex flex-col gap-5 text-white-700 my-4"}>
                        <p className={"text-white text-2xl font-semibold"}>{currentProject.title}</p>
                        <p>{currentProject.desc}</p>
                        <p>{currentProject.subdesc}</p>
                    </div>
                    <div className={"flex items-center justify-between flex-wrap gap-5"}>
                        <div className={"flex items-center"}>
                            {currentProject.tags.map((tag,index) => (
                                <div key={index} className={"tech-logo"}>
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>
                        <a href={currentProject.href} className={"group flex items-center gap-2"} target={"_blank"} rel={"noreferrer"}>
                            <p className={"text-white-600 group-hover:text-white transition-colors duration-200"}>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="Arrow" className={"w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"}/>
                        </a>
                    </div>
                    <div className={"flex justify-between items-center my-5"}>
                        <button className={"arrow-btn"} onClick={()=>handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="Left Arrow" className={"w-4 h-4"}/>
                        </button>
                        <button className={"arrow-btn"} onClick={()=>handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="Right Arrow" className={"w-4 h-4"}/>
                        </button>
                    </div>
                </div>

                <div className={"h-96 md:h-full border border-black-300 bg-black-200 rounded-lg"}>
                    <Canvas>
                        <ambientLight intensity={3} color={"#ffffff"}/>
                        <directionalLight position={[5,10,-5]}/>
                        {/*Center Component is used to Center elements and 3D Components within the Canvas*/}
                        <Center>
                            {/*Suspense is used as loader*/}
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={1.8} position={[0,-2.5,0]} rotation={[0,0,0]}>
                                    <Computer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Projects
