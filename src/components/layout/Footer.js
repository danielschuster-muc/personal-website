import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>
        <Link to="/">danielschuster.me</Link>
      </h3>
      <div className={classes.container}>
        <div>
          <h3>Information</h3>
          <ul>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/legal-notice">Legal Notice</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Projects</h3>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.google.com">
                Project 1
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.google.com">
                Project 2
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Socials</h3>
          <ul>
            <li>
              <Link to="/github">Github</Link>
            </li>
            <li>
              <Link to="/linkedin">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <h4>© {new Date().getFullYear()} Daniel Schuster</h4>
    </footer>
  );
};

export default Footer;
