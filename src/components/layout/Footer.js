import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 1, sm: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <Box component="h3" borderBottom={1}>
                Information
              </Box>
              <Box>
                <Link to="/about">About me</Link>
              </Box>
              <Box>
                <Link to="/imprint">Imprint</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box component="h3" borderBottom={1}>
                Projects
              </Box>
              <Box>
                <Link
                  to={{ pathname: "https://www.google.com" }}
                  target="_blank"
                >
                  Project 1
                </Link>
              </Box>
              <Box>
                <Link
                  to={{ pathname: "https://www.google.com" }}
                  target="_blank"
                >
                  Project 2
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box component="h3" borderBottom={1}>
                Socials
              </Box>
              <Box>
                <Link to="/github">Github</Link>
              </Box>
              <Box>
                <Link to="/linkedin">LinkedIn</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 2, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &copy; {new Date().getFullYear()} Daniel Schuster
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
