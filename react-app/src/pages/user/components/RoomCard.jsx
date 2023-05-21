import React from "react";
import styles from "./css/RoomCard.module.css";

function RoomCard(props) {
  //   console.log(props);
  return (
    <div className={styles.room_card}>
      <div>Room No: id</div>
      <div>Size: size</div>
      <div>Location: floor 4</div>
      <div>Price: price</div>
      <div className={styles.row}>
        <div>offer: percentage</div>
        <div>offer: date</div>
      </div>
    </div>
  );
}

export default RoomCard;
