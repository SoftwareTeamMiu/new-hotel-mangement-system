import React from "react";
import styles from "./css/CenterBox.module.css";

function CenterBox({ children }) {
  return <div className={styles.center_box}>{children}</div>;
}

export default CenterBox;
