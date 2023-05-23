import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/UserDropdown.module.css";
import { useNavigate } from "react-router-dom";

function UserDropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await localStorage.clear();
    navigate("/");
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
          <li>
            <Link
              to="/myreservations"
              className={styles.dropdown_link}
              onClick={handleToggle}
            >
              My Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              className={styles.dropdown_link}
              onClick={handleToggle}
            >
              Checkout
            </Link>
          </li>
          <li>
            <Link
              className={styles.dropdown_link}
              onClick={() => {
                handleToggle();
                handleLogout(); // Call the function when clicked
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserDropdown;
