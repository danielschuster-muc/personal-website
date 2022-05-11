import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Home</Link>
      </div>
      <nav className={classes.nav}>
        <ul></ul>
      </nav>
    </header>
  );
};

export default Navbar;
