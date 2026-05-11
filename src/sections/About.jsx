import React from 'react'

const About = () => {
    return (
        <section className={"c-space my-20"}>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1 image" className={"w-full h-fit sm:h-69 object-contain"}/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Fady</p>
                            <p className="grid-subtext">with 3+ years of experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2 image" className="w-full h-fit sm:h-69 object-contain"/>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">My Specialty</p>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-90.5 flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
