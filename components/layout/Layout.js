import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import Footer from "./footer/Footer";

import classes from "./Layout.module.scss";
import Navbar from "./navbar/Navbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#26a27b",
    },
    secondary: {
      main: "#fafafa",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#26a27b",
    },
  },
});

const Layout = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "dark");
    } else {
      localStorage.setItem("theme", !prefersDarkMode ? "light" : "dark");
    }
  }, []);

  const toggleDarkModeHandler = () => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={classes.pageContainer}>
        <Box className={classes.content}>
          <Navbar
            isDarkMode={darkMode}
            toggleDarkMode={toggleDarkModeHandler}
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
