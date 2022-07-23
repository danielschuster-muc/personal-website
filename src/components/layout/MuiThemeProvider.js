import { useEffect, useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#5D88E5",
    },
    secondary: {
      main: "#AD144A",
    },
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#5D88E5",
    },
    secondary: {
      main: "#AD144A",
    },
    mode: "dark",
  },
});

const MuiThemeProvider = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
