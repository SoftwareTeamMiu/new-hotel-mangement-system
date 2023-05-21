import React, { useState } from "react";
import styles from "./css/UserCheckout.module.css";
import DropdownMenu from "../../../components/DropdownMenu";
import DatePicker from "../../../components/DatePicker";
export default function UserCheckout() {
  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format the date as "YYYY-MM-DD"
  const formattedDate = tomorrow.toISOString().slice(0, 10);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState("");

  const handleSelectionMethod = (selectedValue) => {
    console.log("Selected Payment Method:", selectedValue);
    setSelectedPaymentMethod(selectedValue);
  };

  const handleSelectionStartDate = (selectedValue) => {
    console.log("Start value:", selectedValue);
    setStartDate(selectedValue);
  };

  const handleSelectionEndDate = (selectedValue) => {
    console.log("End Date value:", selectedValue);
    setEndDate(selectedValue);
  };
  return (
    <div>
      <div className={styles.first_row}>
        <div>
          <DropdownMenu
            values={["Cash", "Visa"]}
            keys={[1, 2]}
            onSelect={handleSelectionMethod}
            title="Select Payment Method"
          />
        </div>
        <div className={styles.first_row}>
          <div
            style={{
              marginRight: "20px",
            }}
          >
            Start Date
            <DatePicker
              startDate={formattedDate}
              onSelect={handleSelectionStartDate}
            />
          </div>
          <div>
            End Date
            <DatePicker
              startDate={startDate}
              onSelect={handleSelectionEndDate}
            />
          </div>
        </div>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Room No</th>
            <th>Size</th>
            <th>Floor</th>
            <th>Original Price</th>
            <th>Offer Percentage</th>
            <th>Price after offer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1000</td>
            <td>50%</td>
            <td>500</td>
            <td>
              <button className={styles.btn_remove}>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button className={styles.btn_sbmt}>Make Reservation</button>
      </div>
    </div>
  );
}
