import React, { useState } from "react";
import styles from "./css/DatePicker.module.css";
const DatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleSelect = (e) => {
    setSelectedDate(e.target.value);
    props.onSelect(e.target.value);
  };

  return (
    <div className={styles.date_picker_container}>
      <input
        className={styles.date_picker}
        type="date"
        {...(props.startDate && { min: props.startDate })}
        value={selectedDate}
        onChange={handleSelect}
      />
    </div>
  );
};

export default DatePicker;
