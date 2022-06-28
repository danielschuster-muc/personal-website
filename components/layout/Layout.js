import { Box, Container, CssBaseline } from "@mui/material";
import Footer from "./Footer";

import classes from "./Layout.module.scss";
import Navbar from "./Navbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
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
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#eceff1",
    },
  },
});

const Layout = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
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
