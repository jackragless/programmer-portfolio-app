import { useState, useEffect } from "react"
import ProjectItem from "./ProjectItem"
import { SimpleGrid } from "@chakra-ui/react"
import getProjects from "../services/Project.service"

const ProjectList = () => {
  const [projects, setProjects] = useState(null)
  useEffect(() => {
    getProjects().then((r) => {
      setProjects(r)
    })
  })

  if (projects) {
    return (
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {projects.map((repo) => {
          return <ProjectItem projectData={repo} key={repo.name} />
        })}
      </SimpleGrid>
    )
  }
}

export default ProjectList
