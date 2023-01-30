import { extendTheme } from "@chakra-ui/react"
import "@fontsource/covered-by-your-grace"
import "@fontsource/public-sans"

const accent = "#95DFAE"

const styles = {
  global: (props) => ({
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
    baseStyle: (props) => ({
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
    baseStyle: (props) => ({
      color: accent,
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  body:`"Public Sans", sans-serif`,
  heading: `"Covered By Your Grace", "Public Sans"`,

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
