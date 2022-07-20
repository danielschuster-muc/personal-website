import Link from "next/link";

import { AppBar, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

import ThemeSelector from "./ThemeSelector";

const footerData = [
  {
    title: "Information",
    content: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Legal Notice",
        link: "/legal-notice",
      },
    ],
  },
  {
    title: "Projects",
    content: [
      {
        name: "Personal Website",
        link: "/",
      },
      {
        name: "Flazy",
        link: "https://flazy.herokuapp.com",
      },
    ],
  },
  {
    title: "Socials",
    content: [
      {
        name: "GitHub",
        link: "/github",
      },
      {
        name: "LinkedIn",
        link: "/linkedin",
      },
    ],
  },
];

const Footer = () => {
  return (
    <AppBar component="footer" position="static" color="default">
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 4, sm: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            {footerData.map((row) => (
              <Grid item key={row.title} xs={12} sm={4}>
                <Box borderBottom={1}>{row.title}</Box>
                {row.content.map((column) => (
                  <Box key={column.name} pt={1}>
                    <Link href={column.link}>{column.name}</Link>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>

          <Box
            style={{ textAlign: "center" }}
            pt={{ xs: 3, sm: 5 }}
            pb={{ xs: 4, sm: 0 }}
          >
            <Box pb={{ xs: 3, sm: 5 }}>
              <ThemeSelector />
            </Box>
            <Box>
              Copyright &copy; Daniel Schuster {new Date().getFullYear()}
            </Box>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Footer;
