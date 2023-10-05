// import { useRef } from "react"
// import { useGLTF } from "@react-three/drei"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { OrbitControls, Stage } from "@react-three/drei"


// const MyVoxel = ({ filename, rotateRate }:{filename:string,rotateRate:number}) => {
//   const { nodes, materials } = useGLTF(filename) as any
//   const mesh = useRef<typeof OrbitControls>(null);


//   useFrame(() => {
//     mesh.current.rotation += 0.01;
// }
//   )
//   return (
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.myvoxel.geometry}
//       material={materials["palette"]}
//       rotation={[0.5 * Math.PI, 0 * Math.PI, -0.1 * Math.PI]}
//       ref={mesh}
//     />
//   )
// }

// export const Voxel = ({ filename, rotateRate }:{filename:string,rotateRate:number}) => {
//   return (
//     <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }}>
//       {/* <directionalLight color="white" position={[0, 0, 10]} intensity="0.5" /> */}
//       <Stage
//         intensity={0.1}
//         // preset="rembrandt"
//         // shadows={{
//         //   type: "accumulative",
//         //   color: "black",
//         //   colorBlend: 2,
//         //   opacity: 0.5,
//         // }}
//         adjustCamera={1.2}
//       >
//         <MyVoxel filename={filename} rotateRate={rotateRate} />
//       </Stage>

//       <OrbitControls makeDefault />
//     </Canvas>
//   )
// }



import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Box } from "@chakra-ui/react";

const MeshComponent = ({filePath,rotateRate}:{filePath:string,rotateRate:number}) => {
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, filePath);

  useFrame(() => {
    mesh.current.rotation.y += rotateRate;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export const Voxel = ({filePath,rotateRate}:{filePath:string,rotateRate:number}) => {
  return (
    <Box h="250px">
      <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }} >
      <Stage 
       shadows="contact"
         intensity={0.1}
        adjustCamera={1.2}
       >
      
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent filePath={filePath} rotateRate={rotateRate} />
        </Stage>
      </Canvas>
    </Box>
  );
}