import "./App.css";
import { Navbar, Voxel } from "./components";
import { ProjectGrid,  Resume} from './views';
import {
  VStack,
  Box,
  Container,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { theme } from "./themes/theme";

const baseRotateRate = 3;

function App() {
  const [rotateRate, setRotateRate] = useState(baseRotateRate);

  return (
    

      <ChakraProvider 
      theme={theme}
      >
        <Navbar  />
        <Container w={{ lg: "95%" }} p={3}>
          
          <VStack my={3}>
            <Box w="100%"
              onMouseDown={() => setRotateRate(0)}
              onMouseUp={() => setRotateRate(baseRotateRate)}
            >
              <Voxel filePath={"myvoxel.gltf"} rotateRate={rotateRate} />
            </Box>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/projects" element={<ProjectGrid />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </VStack>
        </Container>
      </ChakraProvider>

  );
}

export default App;
