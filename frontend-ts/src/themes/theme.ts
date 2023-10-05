import { extendTheme } from "@chakra-ui/react"
import "@fontsource/public-sans"

// const accent = "#95DFAE"

const styles = {
  global: () => ({
    body: {
      bg: "#202023",
      color:"#FFFFFF",
    },
  }),
}

const components = {
  Text: {
    baseStyle: {
      fontFamily: "Public Sans",
      color:"#FFFFFF",
      fontSize:"0.8em"
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "Public Sans",
      fontWeight: 900,
      color:"#FFFFFF",
    },
    variants: {
      "nav-logo": {
        fontFamily: "Covered By Your Grace",
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: "#FFFFFF",
      textUnderlineOffset: 3,
    }),
  },
  Button: {
    baseStyle: () => ({
      color: "#FFFFFF",
      // textUnderlineOffset: 3,
    }),
  },
  Badge: {
    baseStyle: {
      fontFamily: "courier",
    },
  },
  BreadcrumbLink: {
    baseStyle: () => ({
      color: "#FFFFFF",
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  body: `"Public Sans", sans-serif`,
  heading: `"Public Sans", sans-serif`,
}

const colors = {
  white:"#FFFFFF"
}

const config = {
  initialColorMode: "Dark",
  useSystemColorMode: true,
}

export const customTheme = extendTheme({ config, styles, components, fonts, colors })
