import React, { useEffect, useState } from "react";
import styles from "./css/RoomCard.module.css";
import RoomPage from "./RoomPage";

function RoomCard(props) {
  const [open, setOpen] = useState(false);
  // const [roomDetailsPage, setRoomDetailsPage] = useState();
  const handleOpen = () => {
    setOpen(true);
    console.log("alo open");
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }
    setOpen(false);
    console.log("alo close");
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        handleClose(e);
      }
    };

    // const handleOutsideClick = (e) => {
    //   if (!e.target.closest(".room_card")) {
    //     // handleClose();
    //   }
    // };

    if (open) {
      document.addEventListener("keydown", handleKeyPress);
      // document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      // document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  var hasOffer;
  if (props.room.offer != null) {
    hasOffer = true;
  } else {
    hasOffer = false;
  }

  const handleRoom = () => {
    props.onAcion(props.room.id, props.flag);
  };

  return (
    <div className={styles.room_card}>
      {/* <div>Room No: {props.room.id}</div> */}
      {/* <div>Size: {props.room.roomType.size}</div> */}
      {/* <div>Location: floor {props.room.roomType.location}</div> */}
      {hasOffer ? (
        <>
          <strike
            style={{
              color: "red",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              Price: {props.room.price}
            </div>
          </strike>
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
        <div>
          <div>Price: {props.room.price}</div>
          <div>No Offer</div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handleOpen} className={styles.add_to_reservaion_btn}>
          View Room Details
        </button>
        <RoomPage open={open} close={handleClose} room={props.room} />
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
