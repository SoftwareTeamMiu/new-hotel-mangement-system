import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/UserDropdown.module.css";

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_toggle} onClick={handleToggle}>
        Menu
      </button>

      {isOpen && (
        <ul className={styles.dropdown_menu}>
          <li>
            <Link
              to="/"
              className={styles.dropdown_link}
              onClick={handleToggle}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/about"
              className={styles.dropdown_link}
              onClick={handleToggle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={styles.dropdown_link}
              onClick={handleToggle}
            >
              Products
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  );
}

export default UserDropdown;
