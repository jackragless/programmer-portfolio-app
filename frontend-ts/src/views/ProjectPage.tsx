import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  HStack,
  Image,
  Container,
  LinkBox,
  Link,
  LinkOverlay,
  VStack,
  Spinner,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";
import { getProjects } from "../services/Project.service";


export const ProjectPage = () => {
  const projectName = useParams().title;
  const [projectData, setProjectData] = useState<any>(null);
  useEffect(() => {
    getProjects(projectName ?? "").then((r) => {
      setProjectData(r[0]);
    });
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return projectData ? (
    <Container>
      <VStack spacing="5" align="left">
        <VStack spacing="1" align="left">
          <HStack py="3">
            <Breadcrumb
              spacing={2}
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <Link href="#/projects">Projects</Link>
              </BreadcrumbItem>
              <BreadcrumbItem></BreadcrumbItem>
            </Breadcrumb>

            <LinkBox _hover={{ color: "green.300" }}>
              <LinkOverlay href={projectData.html_url} isExternal>
                <HStack ml="-2">
                  <Text>{projectData.name}</Text>
                  <BsGithub />
                </HStack>
              </LinkOverlay>
            </LinkBox>
          </HStack>
          <HStack gap={0}>
            <Badge w="90px" mr="0.8rem">DESC</Badge>
            <Text>{(projectData.description ?? "...")}</Text>
          </HStack>
          <HStack gap={0}>
            <Badge w="50px" mr="0.8rem">YEAR</Badge>
            <Box>
            <Text>{new Date(projectData.created_at).getFullYear()}</Text>
            </Box>
          </HStack>
          <HStack gap={0}>
            <Badge w="50px" mr="0.8rem">LANGS</Badge>
            <Text>{projectData.langs.join(", ")}</Text>
          </HStack>
          <Text>
            <Badge w="50px" mr="0.8rem">AREAS</Badge>
            {projectData.topics.join(", ")}
          </Text>
        </VStack>
        <VStack spacing="3">
          {projectData.video &&
            (<iframe
              title={projectData.name}
              width="100%"
              height="250"
              src={projectData.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />)}

          {projectData.imgs?.map((img: any, i: any) => {
            return (
              <>
                <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                  <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p={0} >
                      <Image src={img} borderRadius={2} />
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <Image
                  src={img}
                  borderRadius={2}
                  key={`imgcontainer-${i}`}
                  onClick={onOpen}
                />
              </>
            );
          })}
        </VStack>
      </VStack>
    </Container>
  ) : (
    <Spinner color="green.300" />
  );
};
