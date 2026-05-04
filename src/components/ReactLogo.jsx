import {Float, useGLTF} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

export function ReactLogo(props) {
    const { nodes, materials } = useGLTF('/models/react.glb')
    const isMobile = useMediaQuery({maxWidth: 425 })
    const logoRef = useRef();

    // Rotation Animation Function
    // useGSAP(()=>{
    //     gsap.to(logoRef.current.rotation, {
    //         y: logoRef.current.rotation.y + Math.PI * 2,
    //         duration: 7,
    //         ease: "none",
    //         repeat: -1,
    //     })
    // })

    return (
        <Float floatIntensity={3}>
            <group {...props}
                   dispose={null}
                   scale={isMobile ? 0.4 : 0.7}
                   ref={logoRef}
            >
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')
