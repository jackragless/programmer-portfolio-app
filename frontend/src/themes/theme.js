import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "@fontsource/covered-by-your-grace"
import "@fontsource/public-sans"

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
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
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Badge: {
    baseStyle: {
      fontFamily: "courier",
    },
  },
}

// const fonts = {
//   heading: "",
// }

const colors = {
  grassTeal: "#88ccca",
}

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, colors })
export default theme
