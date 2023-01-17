import React from "react"
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons"
import getResume from "../services/Resume.service"
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Hide,
  Show,
  Spacer,
  Heading,
} from "@chakra-ui/react"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const [links, setLinks] = React.useState(null)
  const location = useLocation()
  React.useEffect(() => {
    getResume().then((links) => {
      setLinks(links)
    })
  })

  if (links) {
    return (
      <Flex
        w="100%"
        className="navbarContainer"
        justifyContent="center"
        alignItems="center"
        p="2"
      >
        <Show above="md">
          <HStack>
            <Heading mr="5" variant="nav-logo">
              J.R.
            </Heading>

            <ButtonGroup gap="1" variant="ghost">
              <Link href={"/resume"}>
                <Button
                  isActive={
                    (location.pathname === "/resume") |
                    (location.pathname === "/")
                      ? true
                      : false
                  }
                  size="md"
                >
                  Resume
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button
                  isActive={
                    location.pathname.startsWith("/projects") ? true : false
                  }
                  size="md"
                >
                  Projects
                </Button>
              </Link>
            </ButtonGroup>
            <HStack>
              <Link href={links.github} isExternal>
                <Button size="md" variant="ghost">
                  Github
                </Button>
              </Link>
              <Link href={links.linkedin} isExternal>
                <Button size="md" variant="ghost">
                  LinkedIn
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Show>
        <Hide above="md">
          <Heading variant="nav-logo">J.R.</Heading>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={Link} href={"/resume"}>
                Resume
              </MenuItem>
              <MenuItem as={Link} href={"/projects"}>
                Projects
              </MenuItem>
              <MenuItem as={Link} href={links.github}>
                Github
              </MenuItem>
              <MenuItem as={Link} href={links.linkedin}>
                LinkedIn
              </MenuItem>
            </MenuList>
          </Menu>
        </Hide>
      </Flex>
    )
  }
}

export default Navbar
