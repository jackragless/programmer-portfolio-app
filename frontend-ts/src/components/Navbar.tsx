import { HamburgerIcon } from "@chakra-ui/icons";
import { getResume } from "../services/Resume.service";
import {
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Hide,
  Show,
  Spacer,
  createIcon,
  IconButton,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
const JrIcon = createIcon({
  displayName: "Jr",
  viewBox: "0 0 385.254 200.977",
  d: "M156.445 190.724l-4.687-58.008a591.698 591.698 0 01-.833-1.813q-1.015-2.219-1.726-3.829a172.329 172.329 0 01-.224-.511 11.72 11.72 0 01-.793-2.694q-.233-1.336-.233-2.872a16.528 16.528 0 01.255-2.958 13.634 13.634 0 01.478-1.876 14.284 14.284 0 00.657-3.19 17.566 17.566 0 00.075-1.644 167.077 167.077 0 00-.155-7.344 134.611 134.611 0 00-.284-4.668 1351.706 1351.706 0 00-.476-5.859 1801.157 1801.157 0 00-.55-6.445 1.437 1.437 0 00-.374-.57q-.4-.391-1.169-.708a7.853 7.853 0 00-.508-.187 25.009 25.009 0 01-1.831-.696q-.937-.397-1.945-.9a39.768 39.768 0 01-.032-.016 10.226 10.226 0 01-2.694-1.976 12.764 12.764 0 01-.968-1.1 6.786 6.786 0 01-1.116-2.175q-.496-1.572-.496-3.684a12.799 12.799 0 01.32-2.928 9.689 9.689 0 011.292-3.078q1.611-2.49 3.369-4.688 1.758-2.197 3.369-4.687a9.888 9.888 0 001.421-3.71 13.301 13.301 0 00.19-2.296 25.104 25.104 0 00-.016-.823q-.04-1.201-.181-3.258a243.808 243.808 0 00-.096-1.339 197.471 197.471 0 01-.345-5.912 230.24 230.24 0 01-.094-2.437 2447.754 2447.754 0 00-.147-4.285 2090.519 2090.519 0 00-.146-4.065 458.353 458.353 0 01-.061-1.717q-.086-2.581-.086-3.703v-1.172a327.427 327.427 0 00.559-1.263q.796-1.813 1.346-3.131a12.492 12.492 0 01.508-1.082q.519-.971 1.103-1.555.879-.879 2.344-1.318 1.465-.44 3.808-.44a25.792 25.792 0 013.206.186q3.569.448 5.647 1.981a7.449 7.449 0 01.229.177 14.299 14.299 0 012.491 2.527 11.65 11.65 0 011.611 2.893 27.918 27.918 0 01.906 2.787q.378 1.43.538 2.75a17.237 17.237 0 01.021.176q.191 1.72.756 2.443a1.293 1.293 0 00.709.486l21.093-18.457h1.172a88.533 88.533 0 0121.68-10.4Q226.758.001 239.355.001q3.809 0 9.229.879a40.216 40.216 0 0110.254 3.076q4.834 2.197 8.203 5.713a12.009 12.009 0 013.344 7.895 15.83 15.83 0 01.025.894 50.82 50.82 0 01-1.043 10.096 57.618 57.618 0 01-.422 1.916 80.221 80.221 0 01-3.955 12.158q-2.49 6.006-5.859 11.426a57.809 57.809 0 01-3.704 5.303 44.767 44.767 0 01-3.474 3.925q-1.251 2.753-14.046 12.774a464.822 464.822 0 01-4.704 3.632q-13.234 10.094-36.428 27.744a111017.269 111017.269 0 01-15.134 11.514l140.625 8.789a65.857 65.857 0 002.045.169q2.137.146 5.04.241a236.232 236.232 0 00.971.03q5.127.146 9.961 1.025a22.737 22.737 0 014.893 1.443 18.658 18.658 0 013.457 1.926q3.515 2.49 3.515 7.471a15.499 15.499 0 01-.085 1.683q-.09.823-.275 1.513a6.79 6.79 0 01-.372 1.052 10.486 10.486 0 01-.751 1.382 7.721 7.721 0 01-1.007 1.255 14.865 14.865 0 01-1.781 1.512 17.079 17.079 0 01-.563.392 10.049 10.049 0 00-1.512 1.249 13.037 13.037 0 00-.978 1.095h-9.961q-5.859-.586-12.158-1.465-6.299-.879-14.648-2.051a439.038 439.038 0 00-6.654-.879q-2.935-.366-6.143-.732a764.014 764.014 0 00-6.686-.733 411.317 411.317 0 00-8.967-.837q-7.988-.664-17.693-1.213a993.01 993.01 0 00-12.366-.618q-10.907-.481-23.816-.847-17.749-.504-40.367-.575a2406.58 2406.58 0 00-7.533-.011.293.293 0 00-.166.062q-.196.138-.443.581a6.069 6.069 0 00-.123.236q-.44.879-.44 1.465a124.252 124.252 0 001.904 21.826q1.905 10.693 1.905 21.24a22.468 22.468 0 01-.11 2.161q-.108 1.117-.323 2.341a35.829 35.829 0 01-.007.039q-.439 2.49-1.611 4.687a12.636 12.636 0 01-1.888 2.676 11.289 11.289 0 01-1.042.987 6.249 6.249 0 01-3.131 1.373 8.429 8.429 0 01-1.263.091q-1.399 0-3.169-.464a20.854 20.854 0 01-.933-.268q-2.344-.732-4.541-2.197a26.02 26.02 0 01-3.678-2.95 23.984 23.984 0 01-.277-.273 7.167 7.167 0 01-1.595-2.352 6.807 6.807 0 01-.456-1.749zm-99.316-18.458l1.172-1.171q0-.293.146-2.93a91.496 91.496 0 00.11-2.783 123.288 123.288 0 00.037-3.076v-12.012a1689.086 1689.086 0 00-.733-49.951 1689.086 1689.086 0 01-.732-49.952V9.083q.879-4.102 3.662-6.006t6.592-1.904a19.627 19.627 0 017.933 1.703 22.413 22.413 0 01.123.055A8.72 8.72 0 0180.3 8.217a11.572 11.572 0 01.266.866q-.586 36.621 1.026 72.07a1580.682 1580.682 0 011.611 71.778v12.451q0 8.056-1.318 15.967-1.319 7.91-4.981 13.769a12.682 12.682 0 01-3.61 3.848q-2.963 2.011-7.083 2.011-.529 0-1.417-.119a24.269 24.269 0 01-.194-.027 41.937 41.937 0 00-.359-.05q-.544-.073-.813-.091a2.271 2.271 0 00-.147-.006 11.536 11.536 0 01-.815-.371q-1.542-.764-4.458-2.558a46.454 46.454 0 01-1.315-.838q-2.604-1.726-3.08-2.678L5.273 140.04q-3.475-3.765-4.374-6.814a8.839 8.839 0 01-.02-.071Q0 130.079 0 125.977a14.212 14.212 0 011.787-6.856 16.944 16.944 0 01.264-.468q2.051-3.515 6.738-3.515a6.497 6.497 0 012.314.399 5.839 5.839 0 012.081 1.358q1.757 1.758 3.076 4.248a118.339 118.339 0 012.49 4.981 18.055 18.055 0 001 1.854q.767 1.231 1.637 2.101a23.526 23.526 0 011.13 1.049q1.625 1.594 4.307 4.597a261.636 261.636 0 011.74 1.971q5.127 5.86 10.401 12.305 5.273 6.445 9.668 11.865 4.198 5.178 4.92 6.479a2.979 2.979 0 01.06.113q.564.564 1.671 1.807a124.59 124.59 0 01.087.097q1.172 1.319 1.758 1.904zM171.387 63.282v4.688a326.513 326.513 0 00.114 8.812 269.687 269.687 0 00.179 4.957 397.634 397.634 0 00.366 6.738 512.168 512.168 0 00.513 7.325h.879a.666.666 0 00.155-.025q.376-.094 1.309-.561a11.504 11.504 0 00.563-.308q1.37-.787 4.709-2.969a381.043 381.043 0 00.588-.385q4.602-3.021 14.006-9.431a2739.14 2739.14 0 00.349-.237 16636.776 16636.776 0 005.329-3.635q6.004-4.098 14.112-9.636a63659.747 63659.747 0 007.805-5.333q3.516-2.051 7.617-7.031 4.102-4.981 7.618-10.84a90.166 90.166 0 004.28-7.987 77.54 77.54 0 001.579-3.585 42.898 42.898 0 001.236-3.385q1.071-3.402 1.107-5.962a12.593 12.593 0 00.001-.175 4.454 4.454 0 00-.133-1.14q-.387-1.457-1.901-1.728a4.264 4.264 0 00-.749-.061h-4.834q-3.777 0-8.419 1.081a56.052 56.052 0 00-1.542.383q-5.567 1.465-13.33 5.86-7.764 4.394-18.457 12.597-10.694 8.204-25.049 21.973zm-48.926 123.633v.879q0 4.98-3.369 8.935a10.984 10.984 0 01-8.037 3.929 14.942 14.942 0 01-.899.026 9.418 9.418 0 01-3.696-.798q-2.067-.877-4.214-2.717a14.87 14.87 0 01-2.163-2.255q-1.181-1.549-1.643-3.202a7.996 7.996 0 01-.295-2.16 10.802 10.802 0 011.877-6.051 14.533 14.533 0 011.199-1.567 11.39 11.39 0 012.451-2.142 8.646 8.646 0 014.726-1.373 15.344 15.344 0 013.468.371 10.606 10.606 0 014.589 2.266 66.488 66.488 0 015.179 4.964 74.283 74.283 0 01.827.895zm262.793 0v.879q0 4.98-3.369 8.935a10.984 10.984 0 01-8.037 3.929 14.942 14.942 0 01-.899.026 9.418 9.418 0 01-3.696-.798q-2.067-.877-4.214-2.717a14.87 14.87 0 01-2.163-2.255q-1.181-1.549-1.643-3.202a7.996 7.996 0 01-.295-2.16 10.802 10.802 0 011.877-6.051 14.533 14.533 0 011.199-1.567 11.39 11.39 0 012.451-2.142 8.646 8.646 0 014.726-1.373 15.344 15.344 0 013.468.371 10.606 10.606 0 014.589 2.266 66.488 66.488 0 015.179 4.964 74.283 74.283 0 01.827.895z",
});


export const Navbar = () => {
  const [links, setLinks] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    getResume().then((links) => {
      setLinks(links);
    });
  },[]);
  return (
    <Flex
      className="navbarContainer"
      justifyContent="center"
      alignItems="center"
      p="2"
      h={12}
    >
      <Show above="md">
        <HStack gap={10} h={8}>
          <JrIcon boxSize={12} />
          <HStack gap={2}>
            <Link href={"#/resume"}>
              <Button
                borderRadius={2}
                variant="ghost"
                isActive={
                  location.pathname === "/resume" || location.pathname === "/"
                }
                _hover={{
                  textDecoration: "none",
                  color: "green.300",
                }}
              >
                Resume
              </Button>
            </Link>
            <Link href={"#/projects"}>
              <Button
                borderRadius={2}
                variant="ghost"
                isActive={location.pathname.startsWith("/projects")}
                _hover={{
                  textDecoration: "none",
                  color: "green.300",
                }}
              >
                Projects
              </Button>
            </Link>

            <Link href={links?.github} isExternal>
              <IconButton
                variant="ghost"
                aria-label="compact-menu"
                borderRadius={2}
                icon={<FaSquareGithub size="1.2em" />}
              />
            </Link>
            <Link href={links?.linkedin} isExternal>
              <IconButton
                variant="ghost"
                aria-label="compact-menu"
                borderRadius={2}
                icon={<FaLinkedin size="1.2em" />}
                _hover={{
                  color: "#0A66C2",
                  bg:"#313134"
                }}
              />
            </Link>
          </HStack>
        </HStack>
      </Show>
      <Hide above="md">
        <JrIcon boxSize={"2.5rem"} />
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton} 
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            borderRadius={2}
            ml={2}
          />
          <MenuList bg="#2C2A2C">
            <MenuItem as={Link} href={"#/resume"} bg="#2C2A2C" _hover={{bg:"#313134"}}>
              Resume
            </MenuItem>
            <MenuItem as={Link} href={"#/projects"} bg="#2C2A2C" _hover={{bg:"#313134"}}>
              Projects
            </MenuItem>
            <MenuItem as={Link} href={links?.github} bg="#2C2A2C" _hover={{bg:"#313134"}}>
              Github
            </MenuItem>
            <MenuItem as={Link} href={links?.linkedin} bg="#2C2A2C" _hover={{bg:"#313134"}}>
              LinkedIn
            </MenuItem>
          </MenuList>
        </Menu>
      </Hide>
    </Flex>
  );
};
