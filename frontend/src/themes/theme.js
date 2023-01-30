import { extendTheme } from "@chakra-ui/react"
import "@fontsource/public-sans"

const accent = "#95DFAE"

const styles = {
  global: () => ({
    body: {
      bg: "#202023",
    },
  }),
}

const components = {
  Text: {
    baseStyle: {
      fontFamily: "Public Sans",
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "Public Sans",
      fontWeight: 900,
    },
    variants: {
      "nav-logo": {
        fontFamily: "Covered By Your Grace",
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: accent,
      textUnderlineOffset: 3,
    }),
  },
  Badge: {
    baseStyle: {
      fontFamily: "courier",
    },
  },
  BreadcrumbLink: {
    baseStyle: () => ({
      color: accent,
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  body: `"Public Sans", sans-serif`,
  heading: `"Public Sans", sans-serif`,
}

const colors = {
  grassTeal: "#88ccca",
}

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
