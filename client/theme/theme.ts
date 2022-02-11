import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  sizes: {
    "4xs": "10rem",
    "5xs": "6rem",
    "6xs": "2rem",
  },
  colors: {
    // primary: "#0584e3", // TODO: change primary color
    error: "#bd1717",
  },
});

export default theme;
