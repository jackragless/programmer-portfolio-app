
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Stage, Gltf } from "@react-three/drei";
import { Box } from "@chakra-ui/react";


export const Voxel = ({filePath,rotateRate}:{filePath:string,rotateRate:number}) => {
  return (
    <Box h="250px" w="500px">
    <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 6, 12], fov: 35 }}>
    <Stage
      preset="soft"
      shadows={{ type: 'contact', color: "black", colorBlend: 30, opacity: 0.5, intensity: 3.5 }}
      adjustCamera={1.3}>
      <Gltf castShadow receiveShadow src={filePath}  />
    </Stage>
    
    <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault autoRotate autoRotateSpeed={rotateRate}/>
  </Canvas>
  </Box>
  )
}