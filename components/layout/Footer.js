import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";

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
                <Link href="/">Home</Link>
              </Box>
              <Box>
                <Link href="/legal-notice">Legal Notice</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box component="h3" borderBottom={1}>
                Projects
              </Box>
              <Box>
                <Link href="https://www.google.com" target="_blank">
                  Project 1
                </Link>
              </Box>
              <Box>
                <Link href="https://www.google.com" target="_blank">
                  Project 2
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box component="h3" borderBottom={1}>
                Socials
              </Box>
              <Box>
                <Link href="/github">Github</Link>
              </Box>
              <Box>
                <Link href="/linkedin">LinkedIn</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 2, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &copy;{" "}
            <Link color="inherit" href="/">
              Daniel Schuster
            </Link>{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
