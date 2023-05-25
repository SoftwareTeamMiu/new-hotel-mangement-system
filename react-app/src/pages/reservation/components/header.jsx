import React from 'react'
import styles from "../../../components/css/UserHeader.module.css";
import ReceptionistDropdown from './receptionistdropdown';

function header(props) {
    return (
      <div className={styles.header}>
      <div className={styles.logo}>HMS</div>
      <div className={styles.title}>Welcome {props.user_name}</div>
      <div className={styles.dropdown}>
        <ReceptionistDropdown />
      </div>
    </div>
  )
}

export default header