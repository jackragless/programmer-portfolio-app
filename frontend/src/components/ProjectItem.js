import {
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react"
import formatGithubText from "../utilities/formatGithubText"
import ProgressiveImage from "react-progressive-graceful-image"

const ProjectItem = ({ projectData }) => {
  const short_desc = projectData.description.slice(
    0,
    projectData.description.indexOf(".") + 1
  )

  return (
    <LinkBox>
      <LinkOverlay href={`projects/${projectData.name}`}>
        <Card
          maxW="sm"
          boxShadow="md"
          bg="transparent"
          borderRadius="lg"
          _hover={{ bg: "#2c2c33" }}
        >
          <CardBody>
            <ProgressiveImage
              src={projectData.imgs ? projectData.imgs[0] : null}
              placeholder={projectData.thumbnail}
              // borderRadius="lg"
            >
              {(src) => <img src={src} alt="img_missing" />}
            </ProgressiveImage>
            <Stack mt="3" spacing="2">
              <Heading size="md">{formatGithubText(projectData.name)}</Heading>
              <Text>{short_desc}</Text>
            </Stack>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  )
}

export default ProjectItem
