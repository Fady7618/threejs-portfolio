import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("fadyalfred77@gmail.com")
        setIsCopied(true);

        setTimeout(()=>{
            setIsCopied(false);
        }, 1000)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
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
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">My Specialty</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full h-fit sm:h-90.5 flex items-center justify-center">
                            <Globe
                                height={325}
                                width={325}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl={"/textures/earth/earth.jpg"}
                                bumpImageUrl={"/textures/earth/earth-topology.png"}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Work remotely</p>
                            <p className="grid-subtext">I'm based in Egypt, with remote work available</p>
                            <Button name={"Contact Me"} containerClass={"mt-5 w-full"} isBeam={true} />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3 image" className={"w-full h-fit sm:h-69 object-contain"} />
                        <div>
                            <p className="grid-headtext">How I've work?</p>
                            <p className="grid-subtext">Some Text</p>
                        </div>
                    </div>
                </div>
                <div className="xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4 image" className={"w-full h-fit sm:h-69 md:h-31.5 object-contain sm:object-top"} />

                        <div className="space-y-2">
                            <p className={"grid-headtext"}>Contact me</p>
                            <div className="copy-container text-center" onClick={handleCopy}>
                                <img src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="" />
                                <p className={"text-sm md:text-md lg:text-lg text-gray-200"}>fadyalfred77@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
