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
  LinkOverlay
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getResume } from "../services/Resume.service";
import { DownloadIcon } from "@chakra-ui/icons";
import {IoLocationSharp} from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import {BiCodeCurly} from "react-icons/bi";
// import { data } from "../components/data";
// import { ResponsiveCirclePackingCanvas } from "@nivo/circle-packing";


const ResumeItem = ({ data }: { data: any }) => {
  const [resumeItemActive,setResumeItemActive] = useState<boolean>(false)

  return (
  
  <AccordionItem pointerEvents={data.desc ? "auto" : "none"}  _hover={{
    bg:"rgba(0,0,0,0.02)"
  }}
  onMouseOver={() =>{ setResumeItemActive(true)}} onMouseOut={() => setResumeItemActive(false)}
  >
    <AccordionButton px="0">
      <Box  flex="1" my="2">
        <HStack>
          <Badge 
          w="7rem"  mr="0.8rem"
          >
            {`${data.startDate??""} - ${data.endDate ?? 'PRESENT'}`}
          </Badge>
          <Box>
            <Text display="flex" justifyContent="left">{data.title}</Text>
            <Text display="flex" justifyContent="left">{`${data.entity} - ${data.location}`}</Text>
          </Box>
        </HStack>
      </Box>
      {data.desc && <AccordionIcon color={resumeItemActive ? "green.300" : "initial"}/>}
    </AccordionButton>
    <AccordionPanel px={0} pb={4} >
      <Text>{data.desc ?? ""}</Text>
      </AccordionPanel>
  </AccordionItem>
)};

export const Resume = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getResume().then((r) => {
      setData(r);
    });
  });

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
              <HStack><BiCodeCurly/><Text>{data.specialisation}</Text></HStack>
              <Tooltip label="Shoot me an email">
                <LinkBox _hover={{ color: "green.300" }}><LinkOverlay href={`mailto:${data.email}`}><HStack><GrMail/><Text>{data.email}</Text></HStack></LinkOverlay></LinkBox>
              </Tooltip>
              <HStack><IoLocationSharp/><Text>{data.location}</Text></HStack>
              
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
        {/* <Stack>
          <Heading size="md">Skills.</Heading>
        </Stack> */}
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

      </Stack>
    </Box>
  ) : (
    <Spinner color="green.300" />
  );
};
