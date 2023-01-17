import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"

const MyVoxel = ({ filename, rotateRate }) => {
  const { nodes, materials } = useGLTF(filename)
  const mesh = useRef()

  useFrame((state, rotateRate) => (mesh.current.rotation.z -= rotateRate))
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.myvoxel.geometry}
      material={materials["palette"]}
      rotation={[0.5 * Math.PI, 0 * Math.PI, -0.1 * Math.PI]}
      ref={mesh}
    />
  )
}

export default function Model({ filename, rotateRate }) {
  return (
    <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }}>
      {/* <directionalLight color="white" position={[0, 0, 10]} intensity="0.5" /> */}
      <Stage
        intensity={0.1}
        // preset="rembrandt"
        // shadows={{
        //   type: "accumulative",
        //   color: "black",
        //   colorBlend: 2,
        //   opacity: 0.5,
        // }}
        adjustCamera={1.2}
      >
        <MyVoxel filename={filename} rotateRate={rotateRate} />
      </Stage>

      <OrbitControls makeDefault />
    </Canvas>
  )
}

// useGLTF.preload("/myvoxel.gltf")
