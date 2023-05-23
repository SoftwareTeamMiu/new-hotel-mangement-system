import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./css/RoomCard.module.css";

const RoomModalDetails = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  var hasOffer;
  if (props.room.offer != null) {
    hasOffer = true;
  } else {
    hasOffer = false;
  }

  const handleRoom = () => {
    props.onAction(props.room.id, props.flag);
  };

  const handleGetRoom = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalContent = (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
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
              Price after offer:{" "}
              {props.room.price * props.room.offer.percentage}
            </div>
          </>
        ) : (
          <div>Price: {props.room.price}</div>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.room_card} onClick={handleGetRoom}>
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
            Remove from reservation
          </button>
        )}
      </div>
      {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default RoomModalDetails;
