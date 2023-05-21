import React from "react";
import styles from "./css/RoomCard.module.css";

function RoomCard(props) {
  var hasOffer;
  if (props.room.offer != null) {
    hasOffer = true;
  } else {
    hasOffer = false;
  }
  return (
    <div className={styles.room_card}>
      <div>Room No: {props.room.id}</div>
      <div>Size: {props.room.roomType.size}</div>
      <div>Location: floor {props.room.roomType.location}</div>
      {hasOffer ? (
        <>
          <div>Price: {props.room.price}</div>
          <div>
            <div>
              {props.room.offer.percentage * 100}% offer Till:{" "}
              {props.room.offer.expirationDate.substring(0, 10)}
            </div>
          </div>
          <div>
            Price after offer: {props.room.price * props.room.offer.percentage}
          </div>
        </>
      ) : (
        <div>Price: {props.room.price}</div>
      )}
    </div>
  );
}

export default RoomCard;
