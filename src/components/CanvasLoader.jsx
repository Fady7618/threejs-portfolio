import React  from 'react'
import {Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html as={"div"} center className={"flex justify-center items-center flex-col"}>
            <span className="canvas-loader"></span>
            <p className={"text-2xl text-neutral-100 font-bold mt-10"}>
                {progress !== 0 ? `${(progress).toFixed(2)}%` : "Loading..."}
            </p>
        </Html>
    )
}
export default CanvasLoader
