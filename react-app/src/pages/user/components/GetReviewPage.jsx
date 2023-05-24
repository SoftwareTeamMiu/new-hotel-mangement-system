import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./css/RoomReviewsPage.module.css";

const RoomReviewsPage = (props) => {
  const closeOnEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.close();
    }
  };

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
              {props.room_reviews && props.room_reviews.length > 0 ? (
                props.room_reviews.map((review) => {
                  return (
                    <div className={styles.room_card}>
                      <div className={styles.row}>
                        By User: {review.user.email}
                      </div>
                      <div className={styles.row}>
                        Title: {review.review_title}
                      </div>
                      <div className={styles.row}>
                        Review Description: {review.review_description}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  className={styles.row}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  No Reviews Found
                </div>
              )}
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

export default RoomReviewsPage;
