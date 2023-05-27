import React, { useEffect, useState } from "react";
import styles from "./css/DatePicker.module.css";
const DatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState("");

  // console.log(props.value);
  // // const [selectedDate, setSelectedDate] = useState("2023-08-01");
  // // console.log(props.value);
  useEffect(() => {
    setSelectedDate(props.value);
  }, [props.value]);

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
        disabled={props.disabled}
      />
    </div>
  );
};

export default DatePicker;
