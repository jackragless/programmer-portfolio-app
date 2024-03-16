import {
  Box,
  HStack,
  Text,
  Heading,
  Image,
  Badge,
  LinkBox,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Stack,
  IconButton,
  Tooltip,
  Spinner,
  LinkOverlay,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getResume } from "../services/Resume.service";
import { DownloadIcon } from "@chakra-ui/icons";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { BiCodeCurly } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { BsTerminalFill } from "react-icons/bs";
// import { data } from "../components/data";
// import { ResponsiveCirclePackingCanvas } from "@nivo/circle-packing";

type WorkExperience = {
  title: string;
  entity: string;
  location: string;
  startDate: string;
  endDate?: string;
  desc: string;
};

type Education = {
  title: string;
  entity: string;
  location: string;
  startDate: string;
  endDate: string;
};

type Resume = {
  linkedin: string;
  github: string;
  portrait: string;
  about: string;
  location: string;
  specialisation: string;
  work_experience: WorkExperience[];
  education: Education[];
  email: string;
  resume: string;
  languages: string[];
  frameworks: string[];
  tools: string[];
};




const ResumeItem = ({ data }: { data: WorkExperience }) => {
  const [resumeItemActive, setResumeItemActive] = useState<boolean>(false)

  return (

    <AccordionItem pointerEvents={data.desc ? "auto" : "none"} _hover={{
      bg: "rgba(0,0,0,0.02)"
    }}
      onMouseOver={() => { setResumeItemActive(true) }} onMouseOut={() => setResumeItemActive(false)}
    >
      <AccordionButton px="0">
        <Box flex="1" my="2">
          <HStack>
            <Badge
              w="7rem" mr="0.8rem"
            >
              {`${data.startDate ?? ""} - ${data.endDate ?? 'PRESENT'}`}
            </Badge>
            <Box>
              <Text display="flex" justifyContent="left">{data.title}</Text>
              <Text display="flex" justifyContent="left">{`${data.entity} - ${data.location}`}</Text>
            </Box>
          </HStack>
        </Box>
        {data.desc && <AccordionIcon color={resumeItemActive ? "green.300" : "initial"} />}
      </AccordionButton>
      <AccordionPanel px={0} pb={4} >
        <Text>{data.desc ?? ""}</Text>
      </AccordionPanel>
    </AccordionItem>
  )
};

export const Resume = () => {
  const [data, setData] = useState<Resume>();
  useEffect(() => {
    getResume().then((r) => {
      setData(r);
    });
  }, []);


  const SkillList = ({ data }: { data: string[] }) => {
    let elements = [];
    for (let i = 0; i < data.length; i += 3) {
      elements.push(
        <VStack align={"left"}>
          {data.slice(i, i + 3).map((langName: string) => <Text>{langName}</Text>)}
        </VStack>
      );
    }
    return <HStack spacing={8}>{elements}</HStack>;
  }


  return data ? (
    <Box>
      <Stack spacing="7">
        <Box bg="rgba(255,255,255,0.1)" borderRadius={2} p="2">
          <HStack spacing="7">
            <Box>
              <Image
                borderRadius={2}
                src={data.portrait}
                alt="jack-ragless-avatar"
              />
            </Box>
            <Stack spacing="2">
              <Heading fontSize="25px">Jack Ragless</Heading>
              <HStack><BiCodeCurly /><Text>{data.specialisation}</Text></HStack>
              <Tooltip label="Shoot me an email">
                <LinkBox _hover={{ color: "green.300" }}><LinkOverlay href={`mailto:${data.email}`}><HStack><GrMail /><Text>{data.email}</Text></HStack></LinkOverlay></LinkBox>
              </Tooltip>
              <HStack><IoLocationSharp /><Text>{data.location}</Text></HStack>

            </Stack>
            <a href={data.resume} download>
              <Tooltip label="Download my resume">
                <IconButton aria-label="" icon={<DownloadIcon />}></IconButton>
              </Tooltip>
            </a>
          </HStack>
        </Box>
        <Stack>
          <Heading size="md">About.</Heading>
          <Text>{data.about}</Text>
        </Stack>

        <Stack>
          <Heading size="md">Career So Far.</Heading>
          <Accordion allowMultiple justifyContent="left">
            {data.work_experience.map((workItem: any, i: any) => {
              return <ResumeItem data={workItem} key={`wexp_${i}`} />;
            })}
          </Accordion>
        </Stack>
        <Stack>
          <Heading size="md">Education.</Heading>
          <Accordion allowMultiple justifyContent="left">
            {data.education.map((eduItem: any, i: any) => {
              return <ResumeItem data={eduItem} key={`edu_${i}`} />;
            })}
          </Accordion>
        </Stack>
        <Stack>


          <Heading size="md">Skills.</Heading>
          <Tabs position="relative" variant="unstyled">
            <TabList borderTop={"1px solid rgba(255, 255, 255, 0.16)"} borderBottom={"1px solid rgba(255, 255, 255, 0.16)"}>
              <Tab pl={0} pr={0} mr={5}>Languages</Tab>
              <Tab pl={0} pr={0} mr={5}>Frameworks</Tab>
              <Tab pl={0} pr={0}>Tools</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="green.300"
              borderRadius="1px"
            />
            <TabPanels borderBottom={"1px solid rgba(255, 255, 255, 0.16)"}>

              <TabPanel pl={0}>

                {

                  <SkillList data={data.languages} />


                }

              </TabPanel>
              <TabPanel pl={0}>
                {
                  <SkillList data={data.frameworks} />
                }

              </TabPanel>
              <TabPanel pl={0}>
                {
                  <SkillList data={data.tools} />
                }
              </TabPanel>
            </TabPanels >
          </Tabs>

        </Stack>

      </Stack>
    </Box>
  ) : (
    <Spinner color="green.300" />
  );
};
