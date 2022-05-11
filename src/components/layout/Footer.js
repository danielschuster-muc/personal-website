import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>danielschuster.me</h3>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/danielschuster-muc"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/danielschuster-muc/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.sub}>
        <h4>© {new Date().getFullYear()} Daniel Schuster</h4>
      </div>
    </footer>
  );
};

export default Footer;
