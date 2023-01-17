import {
  Box,
  HStack,
  Text,
  Heading,
  Image,
  Badge,
  Link,
  Divider,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Stack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import getResume from "../services/Resume.service"
import { DownloadIcon } from "@chakra-ui/icons"
import LeetCard from "./LeetCard"
import SkillTree from "./SkillTree"

const ResumeItem = ({ data }) => {
  if (data.desc) {
    return (
      <AccordionItem my="1">
        <AccordionButton px="0">
          <Box as="span" flex="1">
            <HStack>
              <Badge colorScheme="purple">
                {`${data.startDate} - ${
                  data.endDate ? data.endDate : "PRESENT"
                }`}
              </Badge>
              <Box align="left">
                <Text>{data.title}</Text>
                <Text>{`${data.entity} - ${data.location}`}</Text>
              </Box>
            </HStack>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{data.desc}</AccordionPanel>
      </AccordionItem>
    )
  } else {
    return (
      <>
        <Box>
          <HStack>
            <Badge colorScheme="purple">
              {`${data.startDate} - ${data.endDate}`}
            </Badge>
            <Box>
              <Text>{data.title}</Text>
              <Text>{`${data.entity} - ${data.location}`}</Text>
            </Box>
          </HStack>
        </Box>
        <Divider></Divider>
      </>
    )
  }
}

const Resume = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getResume().then((r) => {
      setData(r)
    })
  })

  if (data) {
    return (
      <Box>
        <Stack spacing="7">
          <Box bg="rgba(255,255,255,0.1)" borderRadius="md" p="2" align="left">
            <HStack spacing="7">
              <Box boxSize="150px">
                <Image
                  borderRadius="full"
                  src={data.portrait}
                  alt="jack-ragless-avatar"
                />
              </Box>
              <Stack spacing="1">
                <Heading>Jack Ragless</Heading>
                <Text>{data.specialisation}</Text>
                <Link href={`mailto:${data.email}`}>{data.email}</Link>
                <Text>{data.location}</Text>
              </Stack>
              <a href={data.resume} download>
                <Tooltip label="Download My Resume">
                  <IconButton icon={<DownloadIcon />}></IconButton>
                </Tooltip>
              </a>
            </HStack>
          </Box>
          <Stack>
            <Heading>About</Heading>
            <Text>{data.about}</Text>
          </Stack>
          <Stack>
            <Heading>Skills</Heading>
            <SkillTree />
          </Stack>
          <Stack>
            <Heading>Education</Heading>
            <Divider></Divider>
            {data.education.map((eduItem) => {
              return <ResumeItem data={eduItem} />
            })}
          </Stack>
          <Stack>
            <Heading>Work Experience</Heading>
            <Accordion allowMultiple justifyContent="left">
              {data.work_experience.map((workItem) => {
                return <ResumeItem data={workItem} />
              })}
            </Accordion>
            {/* <Heading>LeetCode</Heading>
            <LeetCard /> */}
          </Stack>
        </Stack>
      </Box>
    )
  }
}

export default Resume
