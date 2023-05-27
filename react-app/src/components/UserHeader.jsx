import React from "react";
import styles from "./css/UserHeader.module.css";
import UserDropdown from "./UserDropdown";

const UserHeader = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>HMS</div>
      <div className={styles.title}>Welcome {props.user_name}</div>
      <div className={styles.dropdown}>
        <UserDropdown />
      </div>
    </div>
  );
};

export default UserHeader;
