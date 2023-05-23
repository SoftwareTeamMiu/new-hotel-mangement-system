import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./css/RoomPage.module.css";

const RoomPage = (props) => {
  const closeOnEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.close();
    }
  };

  var hasOffer;
  if (props.room.offer != null) {
    hasOffer = true;
  } else {
    hasOffer = false;
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  return props.open
    ? ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.modal_header}>
              <div className={styles.room_card}>
                <div className={styles.row}>Room No: {props.room.id}</div>
                <div className={styles.row}>
                  Size: {props.room.roomType.size}
                </div>
                <div className={styles.row}>
                  Location: floor {props.room.roomType.location}
                </div>
                {hasOffer ? (
                  <>
                    <div className={styles.row}>Price: {props.room.price}</div>
                    <div>
                      <div className={styles.row}>
                        {props.room.offer.percentage * 100}% offer Till:{" "}
                        {props.room.offer.expirationDate.substring(0, 10)}
                      </div>
                    </div>
                    <div className={styles.row}>
                      Price after offer:{" "}
                      {props.room.price * props.room.offer.percentage}
                    </div>
                  </>
                ) : (
                  <div className={styles.row}>Price: {props.room.price}</div>
                )}
              </div>
            </div>
            <div className={styles.modal_footer}>
              <button className={styles.submit_btn} onClick={props.close}>
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default RoomPage;
