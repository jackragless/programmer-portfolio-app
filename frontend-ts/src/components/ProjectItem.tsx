import {
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Image
} from "@chakra-ui/react"


export const ProjectItem = ({ projectData }:{projectData:any}) => {
  const short_desc = projectData.description.slice(
    0,
    projectData.description.indexOf(".") + 1
  )

  return (
    <LinkBox>
      <LinkOverlay href={`#projects/${projectData.name}`}>
        <Card
        maxW="sm"
          h="100%"
          background="transparent"
          _hover={{
            bg:"#3A383A"
          }}
                    boxShadow="md"
          borderRadius={2}
        >
          <CardBody p={3}>
          <AspectRatio ratio={5/3}>
            <Image
              src={projectData.imgs ? projectData.imgs[0] : null}
            />
          </AspectRatio>
            <Stack mt="3" spacing="2">
              <Heading size="md">{projectData.name}</Heading>
              <Text>{short_desc}</Text>
            </Stack>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  )
}

