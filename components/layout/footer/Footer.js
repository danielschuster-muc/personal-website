import Link from "next/link";

import { Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import ThemeSelector from "./ThemeSelector";

const footerData = [
  {
    title: "Information",
    content: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Legal Notice",
        url: "/legal-notice",
      },
    ],
  },
  {
    title: "Projects",
    content: [
      {
        name: "Project 1",
        url: "/",
      },
      {
        name: "Project 2",
        url: "/",
      },
    ],
  },
  {
    title: "Socials",
    content: [
      {
        name: "GitHub",
        url: "/github",
      },
      {
        name: "LinkedIn",
        url: "/linkedin",
      },
    ],
  },
];

const Footer = (props) => {
  const handleSetMode = (mode) => {
    props.onSetMode(mode);
  };

  return (
    <AppBar position="static" component="footer" color="default">
      <Toolbar sx={{ my: 3 }}>
        <Container maxWidth="xl">
          <Grid container borderBottom={1}>
            {footerData.map((row) => (
              <Grid item key={row.title} xs={12} sm={4}>
                <Typography variant="h5">{row.title}</Typography>
                {row.content.map((column) => (
                  <Box key={column.name}>
                    <Link href={column.url}>{column.name}</Link>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>

          <Box style={{ textAlign: "center" }} mt={{ xs: 2, sm: 2 }}>
            <ThemeSelector onSetMode={handleSetMode} mode={props.mode} />
            <Box>
              Copyright &copy;{" "}
              <Link color="inherit" href="/">
                Daniel Schuster
              </Link>{" "}
              {new Date().getFullYear()}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
