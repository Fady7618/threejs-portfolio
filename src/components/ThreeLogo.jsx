import React from 'react'
import {Float, useGLTF} from "@react-three/drei";

const ThreeLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/three.js.glb')
    return (
        <Float speed={2}>
            <group {...props} dispose={null} >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.material_0}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshStandardMaterial color={'white'}/>
                </mesh>
            </group>
        </Float>
    )
}
export default ThreeLogo
