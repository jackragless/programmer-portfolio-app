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
  Spinner
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import getResume from "../services/Resume.service"
import { DownloadIcon } from "@chakra-ui/icons"
// import { SkillTree } from "../components"

const ResumeItem = ({ data }:{data:any}) => {
  if (data.desc) {
    return (
      <AccordionItem my="1">
        <AccordionButton px="0">
          <Box as="span" flex="1">
            <HStack>
              <Badge colorScheme="green">
                {`${data.startDate} - ${
                  data.endDate ? data.endDate : "PRESENT"
                }`}
              </Badge>
              <Box 
            //   align="left"
              >
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
            <Badge colorScheme="green">
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

export const Resume = () => {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    getResume().then((r) => {
      setData(r)
    })
  })


    return (
        data ? (
      <Box>
        <Stack spacing="7">
          <Box bg="rgba(255,255,255,0.1)" borderRadius="md" p="2" 
        //   align="left"
          >
            <HStack spacing="7">
              <Box maxW="200px">
                <Image
                  borderRadius="full"
                  src={data.portrait}
                  alt="jack-ragless-avatar"
                />
              </Box>
              <Stack spacing="1">
                <Heading size="lg">Jack Ragless</Heading>
                <Text>{data.specialisation}</Text>
                <Link href={`mailto:${data.email}`}>{data.email}</Link>
                <Text>{data.location}</Text>
              </Stack>
              <a href={data.resume} download>
                <Tooltip label="Download My Resume">
                  <IconButton aria-label="" icon={<DownloadIcon />}></IconButton>
                </Tooltip>
              </a>
            </HStack>
          </Box>
          <Stack>
            <Heading size="md">About</Heading>
            <Text>{data.about}</Text>
          </Stack>
          <Stack>
            <Heading size="md">Skills</Heading>
            {/* <SkillTree /> */}
          </Stack>
          <Stack>
            <Heading size="md">Education</Heading>
            <Divider></Divider>
            {data.education.map((eduItem:any, i:any) => {
              return <ResumeItem data={eduItem} key={`edu_${i}`} />
            })}
          </Stack>
          <Stack>
            <Heading size="md">Work Experience</Heading>
            <Accordion allowMultiple justifyContent="left">
              {data.work_experience.map((workItem:any, i:any) => {
                return <ResumeItem data={workItem} key={`wexp_${i}`} />
              })}
            </Accordion>
            {/* <Heading>LeetCode</Heading>
            <LeetCard /> */}
          </Stack>
        </Stack>
      </Box>
        ):
        (<Spinner color='red.500' />)
    )
  }