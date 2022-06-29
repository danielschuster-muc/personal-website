import { useEffect, useMemo, useState } from "react";

import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

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
          main: "#f9a825",
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
      <Box
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container component="main" maxWidth="xl" sx={{ flex: 1, mt: 3 }}>
          {props.children}
        </Container>
        <Footer mode={mode} onSetMode={setModeHandler} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
