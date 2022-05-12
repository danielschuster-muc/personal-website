import React from "react";

import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = (props) => {
  return (
    <div className={`${classes.loader} ${props.centered ? "centered" : ""}`} />
  );
};

export default LoadingSpinner;
