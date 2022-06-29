import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import Footer from "./footer/Footer";

import classes from "./Layout.module.scss";
import Navbar from "./navbar/Navbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#232627",
    },
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#90a4ae",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#e1f5fe",
    },
    primary: {
      main: "#e1f5fe",
    },
    secondary: {
      main: "#FCFCFB",
    },
  },
});

const Layout = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [colorMode, setColorMode] = useState(
    !prefersDarkMode ? "light" : "dark"
  );

  const toggleColorModeHandler = () => {
    localStorage.setItem("colorMode", colorMode === "dark" ? "light" : "dark");
    setColorMode((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (localStorage.getItem("colorMode")) {
      setColorMode(localStorage.getItem("colorMode"));
    }
  }, []);

  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={classes.pageContainer}>
        <Box className={classes.content}>
          <Navbar
            isDarkMode={colorMode === "dark"}
            toggleColorMode={toggleColorModeHandler}
          />
          <Container component="main" maxWidth="xl">
            {props.children}
          </Container>
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
