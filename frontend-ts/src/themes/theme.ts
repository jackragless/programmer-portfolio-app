import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import "@fontsource/public-sans"
import "@fontsource-variable/roboto-mono"

const styles = {
  global: (props:any) => ({
    body: {
      color: mode('gray.800', 'gray.100')(props),
      bg: mode('whiteAlpha.900', '#202023')(props),
    }
  }),
};

const components = {

  Text: {
    baseStyle: {
      fontFamily: "Public Sans",
      fontSize:"0.8rem"
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "Public Sans",
      fontWeight: 900,
    }
  },

  Link: {
    baseStyle: () => ({
      fontSize:"0.8rem",
      _hover:{
        textDecoration:"none",
        color: "green.300",
        
      }
    }),
  },
  LinkBox:{
    baseStyle: {
      _hover:{
        textDecoration:"none",
        color: "green.300",
      }
    }
  },
  Button: {
    baseStyle: () => ({
      _hover:{
        color: "green.300",
        textDecoration: "none",
      }
    }),
  },
  Badge: {
    baseStyle: {
      fontWeight:500,
      color:"green.300",
      bg:"#34403A",
      colorScheme:"green",
      fontSize:"0.7rem",
      letterSpacing:0.3,
      display:"inline-flex",
      justifyContent:"center"
    },
  },
  BreadcrumbLink: {
    baseStyle: () => ({
      color: "#FFFFFF",
      _hover:{
        textDecoration:"none",
        color: "green.300"
      }
    }),
  },
}

const fonts = {
  body: `"Public Sans", sans-serif`,
  heading: `"Public Sans", sans-serif`,
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

export const theme = extendTheme({ config, styles, components, fonts})