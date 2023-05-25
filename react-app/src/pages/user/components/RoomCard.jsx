import React, { useEffect, useState } from "react";
import styles from "./css/RoomCard.module.css";
import RoomPage from "./RoomPage";
import CreateRoomReview from "./CreateReview";
import GetReviewsPage from "./GetReviewPage";

function RoomCard(props) {
  const [open, setOpen] = useState(false);
  const [createRommBolean, setCreateRommBolean] = useState(false);
  const [getRommBolean, setGetRommBolean] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCreateRoomReivew = () => {
    setCreateRommBolean(true);
  };
  const handleGetRoomReivew = () => {
    setGetRommBolean(true);
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }
    setOpen(false);
    setCreateRommBolean(false);
    setGetRommBolean(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        handleClose(e);
      }
    };

    if (open || createRommBolean || getRommBolean) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
        <CreateRoomReview
          room={props.room}
          open={createRommBolean}
          close={handleClose}
        />
        <GetReviewsPage
          room_reviews={props.room.reviews}
          open={getRommBolean}
          close={handleClose}
        />
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={handleGetRoomReivew}
          className={styles.add_to_reservaion_btn}
        >
          Show Room Reviews
        </button>
        <button
          onClick={handleCreateRoomReivew}
          className={styles.add_to_reservaion_btn}
        >
          Create Review
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
