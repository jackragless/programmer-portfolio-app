import React from "react"
import theme from "./themes/theme"
import Navbar from "./components/Navbar"
import Voxel from "./components/Voxel"
import { VStack, ChakraProvider, Box, Container } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Resume from "./components/Resume"
import ProjectList from "./components/ProjectList"
import ProjectPage from "./components/ProjectPage"
import { motion } from "framer-motion"

const App = () => {
  const [rotateRate, setRotateRate] = React.useState(0.005)

  return (
    <ChakraProvider theme={theme}>
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <Navbar />
        {/* w={{ base: "95%", md: "60%", lg: "45%", xl: "30%" }} */}
        <Container w={{ lg: "95%" }} p={3}>
          <VStack my={3}>
            <Box h="300px">
              <Voxel
                filename="/myvoxel.gltf"
                rotateRate={rotateRate}
                onClick={() => setRotateRate(0)}
              />
            </Box>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/:title" element={<ProjectPage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
