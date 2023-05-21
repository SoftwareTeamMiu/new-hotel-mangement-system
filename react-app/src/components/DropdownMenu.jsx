import React, { useState } from "react";
import styles from "./css/DropdownMenu.module.css";

const DropdownMenu = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
    props.onSelect(e.target.value);
  };

  return (
    <div className={styles.dropdown_container}>
      <select
        className={styles.dropdown}
        value={selectedValue}
        onChange={handleSelect}
      >
        <option value="">{props.title}</option>
        {props.values.map((value, index) => (
          <option key={index} value={props.keys[index]}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
