import { background, extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import "@fontsource/public-sans"
import "@fontsource-variable/roboto-mono"

const styles = {
  global: (props:any) => ({
    body: {
      color: mode('gray.800', 'gray.100')(props),
      bg: mode('whiteAlpha.900', '#202023')(props),
      fontFamily: "Source Sans Pro",
    }
  }),
};

const components = {

  Text: {
    baseStyle: {
      fontSize:"14px"
    },
  },
  Heading: {
    baseStyle: {
      letterSpacing: "0.5px",
      fontFamily: "Source Sans Pro",
      fontSize:"25px",
      textTransform: "uppercase",
    }
  },
  Link: {
    baseStyle: {
      fontSize:"14px",
      _hover:{
        textDecoration:"none",
        color: "green.300",
        
      }
    },
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
    baseStyle:{
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      _hover:{
        color: "green.300",
        textDecoration: "none",
      }
    },
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