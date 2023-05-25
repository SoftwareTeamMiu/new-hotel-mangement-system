import React, { useState } from "react";
import { Link } from "react-router-dom";
import userDropdownStyles from "../../../components/css/UserDropdown.module.css";
import { useNavigate } from "react-router-dom";

function ReceptionistDropdown() {
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
    <div className={userDropdownStyles.dropdown}>
      <button className={userDropdownStyles.dropdown_toggle} onClick={handleToggle}>
        Menu
      </button>

      {isOpen && (
        <ul className={userDropdownStyles.dropdown_menu}>
          <li>
            <Link
              className={userDropdownStyles.dropdown_link}
              onClick={() => {
                handleToggle();
                handleLogout();
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

export default ReceptionistDropdown;
