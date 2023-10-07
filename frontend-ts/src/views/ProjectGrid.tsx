import { useState, useEffect } from "react"
import {ProjectItem} from "../components"
import { SimpleGrid, Spinner } from "@chakra-ui/react"
import {getProjects} from "../services/Project.service"

export const ProjectGrid = () => {
  const [projects, setProjects] = useState(null)
  useEffect(() => {
    getProjects("").then((r) => {
      setProjects(r)
    })
  })

    return (
      projects ? (
      <SimpleGrid columns={[1, 1, 2]} gap={3}>
        {
        // @ts-expect-error
        projects.map((repo) => {
          return <ProjectItem projectData={repo} key={repo.name} />
        })}
      </SimpleGrid>
      )
      :
      (<Spinner color='red.500' />)
    )
      }

