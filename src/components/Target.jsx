import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const { scene } = useGLTF('/models/target.glb')
    const targetRef = useRef();

    useGSAP(()=>{
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.7,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <mesh ref={targetRef} {...props}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default Target
