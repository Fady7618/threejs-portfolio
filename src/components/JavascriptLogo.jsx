import React from 'react'
import {Float, useGLTF} from "@react-three/drei";

const JavascriptLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/javascript.glb')
    return (
        <Float floatIntensity={1} floatingRange={[0.1, 0.5]}>
            <group {...props} dispose={null} >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.yellow}
                >
                    <meshLambertMaterial color={'yellow'}/>
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.black}
                />
            </group>
        </Float>
    )
}
export default JavascriptLogo
