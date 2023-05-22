import React from "react";
import classes from "./css/CenterHeader.module.css";

const CenterHeader = ({ label }) => {
  return <div className={classes.header}>{label}</div>;
};

export default CenterHeader;
