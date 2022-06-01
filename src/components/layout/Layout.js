import { Box, Container } from "@mui/material";

import Footer from "./Footer";
import Navbar from "./Navbar";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.pageContainer}>
      <Box className={classes.content}>
        <Navbar />
        <Container component="main" maxWidth="xl">
          {props.children}
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
