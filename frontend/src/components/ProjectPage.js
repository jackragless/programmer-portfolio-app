import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  Text,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Badge,
  HStack,
  Box,
  Image,
  Container,
  LinkBox,
  Link,
  LinkOverlay,
  VStack,
  AspectRatio,
  Divider,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import getProjects from "../services/Project.service"
import formatGithubText from "../utilities/formatGithubText"

const ProjectPage = () => {
  const projectName = useParams().title
  const [projectData, setProjectData] = useState(null)
  useEffect(() => {
    getProjects(projectName).then((r) => {
      setProjectData(r)
    })
  })
  if (projectData) {
    return (
      <Container>
        <VStack spacing="5" align="left">
          <VStack spacing="1" align="left">
            <HStack py='3'>
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <Link href="../projects">
                    <BreadcrumbLink>Projects</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <a href={projectData.html_url}>
                  <BreadcrumbItem isCurrentPage></BreadcrumbItem>
                </a>
              </Breadcrumb>

              <LinkBox>
                <LinkOverlay href={projectData.html_url} isExternal>
                  <HStack ml="-2">
                    <Text>{formatGithubText(projectData.name)}</Text>
                    <FaGithub />
                  </HStack>
                </LinkOverlay>
              </LinkBox>
            </HStack>
            <Text>
              <Badge colorScheme="green">DESC </Badge>
              {"  " +
                (projectData.description ? projectData.description : "...")}
            </Text>
            <HStack>
              <Badge colorScheme="green">YEAR</Badge>
              <Text>{new Date(projectData.created_at).getFullYear()}</Text>
            </HStack>
            <HStack>
              <Badge colorScheme="green">LANGS</Badge>
              <Text>{projectData.langs.join(", ")}</Text>
            </HStack>
            <Text>
              <Badge colorScheme="green">AREAS</Badge>
              {"  " + projectData.topics.join(", ")}
            </Text>
          </VStack>
          <VStack spacing="3">
            {projectData.video ? (
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/Gze3XpnaWUA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <></>
            )}

            {projectData.imgs ? (
              projectData.imgs.map((img) => {
                return (
                  <Box>
                    <Image src={img} />
                  </Box>
                )
              })
            ) : (
              <></>
            )}
          </VStack>
        </VStack>
      </Container>
    )
  }
}

export default ProjectPage
