import { Box, Container } from "@mui/material";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import MuiThemeProvider from "./MuiThemeProvider";

const Layout = ({ children }) => {
  return (
    <NextThemeProvider defaultTheme="system">
      <MuiThemeProvider>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Container component="main" maxWidth="xl" sx={{ flex: 1, my: 5 }}>
            {children}
          </Container>
          <Footer />
        </Box>
      </MuiThemeProvider>
    </NextThemeProvider>
  );
};

export default Layout;
