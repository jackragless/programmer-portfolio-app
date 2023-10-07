// import "./App.css";
import { Navbar, Voxel } from "./components";
import { ProjectGrid, ProjectPage, Resume} from './views';
import {
  VStack,
  Box,
  Container,
  ChakraProvider,
  extendTheme,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
function App() {
  const [rotateRate, setRotateRate] = useState(1);

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ChakraProvider>
        <Navbar  />
        <Container w={{ lg: "95%" }} p={3}>
          
          <VStack my={3}>
            <Box
              onMouseDown={() => setRotateRate(0)}
              onMouseUp={() => setRotateRate(1)}
            >
              <Voxel filePath={"myvoxel.gltf"} rotateRate={rotateRate} />
            </Box>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/projects" element={<ProjectGrid />} />
              <Route path="/projects/:title" element={<ProjectPage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </VStack>
        </Container>
      </ChakraProvider>
    </motion.div>
  );
}

export default App;
