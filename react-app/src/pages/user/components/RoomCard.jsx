import React from "react";
import styles from "./css/RoomCard.module.css";

function RoomCard(props) {
  var hasOffer;
  if (props.room.offer != null) {
    hasOffer = true;
  } else {
    hasOffer = false;
  }

  const handleRoom = () => {
    // console.log(props.room.id);
    // console.log(props.flag);
    props.onAcion(props.room.id, props.flag);
  };

  

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
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {props.flag === "0" ? (
          <button onClick={handleRoom} className={styles.add_to_reservaion_btn}>
            Add to reservation
          </button>
        ) : (
          <button
            onClick={handleRoom}
            className={styles.remove_to_reservaion_btn}
          >
            remove to reservation
          </button>
        )}
      </div>
      
    </div>
  );
}

export default RoomCard;
