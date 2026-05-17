import React from 'react'
import {Canvas} from "@react-three/fiber";
import {myProjects, workExperiences} from "../constants/index.js";

const Experience = () => {
    return (
        <section className={"c-space my-12"}>
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>My Work Experience</h3>

                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas></Canvas>
                    </div>

                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-10 sm:px-5 px-2.5"}>
                            {workExperiences.map((experience, index) => (
                                <div key={index} className={"work-content_container group"}>
                                    <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                        <div className={"work-content_logo"}>
                                            <img src={experience.icon} alt="logo" className={"w-full h-full"}/>
                                        </div>
                                        <div className={"work-content_bar"} />
                                    </div>

                                    <div className={"py-5 px-2.5 sm:p-5"}>
                                        <p className={"font-bold text-white-800"}>{experience.name}</p>
                                        <p className={"font-sm mb-5"}>{experience.pos} -- {experience.duration}</p>
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
