import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import Footer from "./footer/Footer";

import classes from "./Layout.module.scss";
import Navbar from "./navbar/Navbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#26a27b",
//     },
//     secondary: {
//       main: "#fafafa",
//     },
//   },
// });

// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#fafafa",
//     },
//     secondary: {
//       main: "#26a27b",
//     },
//   },
// });

const Layout = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("system");

  const theme = useMemo(() => {
    let themeMode = "dark";
    if (mode === "system") {
      themeMode = prefersDarkMode ? "dark" : "light";
    } else if (mode === "light") {
      themeMode = mode;
    }

    return createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: "#5c6bc0",
        },
        secondary: {
          main: "#1976d2",
        },
      },
    });
  }, [mode, prefersDarkMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    } else {
      localStorage.setItem("mode", mode);
    }
  }, []);

  const setModeHandler = (mode) => {
    setMode(mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.pageContainer}>
        <Box className={classes.content}>
          <Navbar mode={mode} onSetMode={setModeHandler} />
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
