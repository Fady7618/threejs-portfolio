import React from 'react'
import {Float, useGLTF} from "@react-three/drei";

const TailwindLogo = (props) => {
    const { nodes, materials } = useGLTF('models/tailwind.glb')
    return (
        <Float>
            <group {...props} dispose={null} >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.blue}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={5}
                />
            </group>
        </Float>
    )
}
export default TailwindLogo
