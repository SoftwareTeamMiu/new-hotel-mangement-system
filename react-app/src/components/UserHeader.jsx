import React from "react";
import styles from "./css/UserHeader.module.css";
import UserDropdown from "./UserDropdown";

const UserHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>HMS</div>
      <div className={styles.dropdown}>
        <UserDropdown />
      </div>
    </div>
  );
};

export default UserHeader;
