import React from 'react'
import {myProjects} from "../constants/index.js";

const Projects = () => {
    return (
        <section className={"c-space my-20"}>
            <p className={"head-text"}>My work</p>

            <div className={"grid gap-5 grid-cols-1 lg:grid-cols-2 mt-10 w-full"}>
                <div className={"flex flex-col gap-5 relative py-10 px-5 sm:p-10 shadow-2xl shadow-black-200"}>
                    <div className={"absolute top-0 right-0"}>
                        <img src={myProjects[0].spotlight} alt="spotlight" className={"w-full h-96 object-cover rounded-xl"}/>
                    </div>
                    <div className={"p-3 backdrop-blur-2xl w-fit rounded-lg"} style={myProjects[0].logoStyle}>
                        <img src={myProjects[0].logo} alt="logo" className={"w-10 h-10 shadow-sm"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects
