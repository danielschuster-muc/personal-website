import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
