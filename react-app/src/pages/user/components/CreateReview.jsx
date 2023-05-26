import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./css/CreateReview.module.css";
import { makeReview } from "../../../services/UserService";
import MessageModal from "../../../components/MessageModal";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CreateRoomReview = (props) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
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

  const handleCreateRoomReview = async () => {
    const review = {
      review_title: reviewTitle,
      review_description: reviewDescription,
      room_id: props.room.id.toString(),
    };

    const response = await makeReview(review);
    if (response.status === 201) {
      setErrorMessage("Review made successfully");
      handleOpen();
      await delay(1000);
      window.location.reload(false);
      props.close();
    } else {
      setErrorMessage(response.response.data);
      handleOpen();
    }
  };

  return props.open
    ? ReactDOM.createPortal(
        <div className={styles.modal}>
          <MessageModal
            open={open}
            close={handleClose}
            error_message={errorMessage}
          />
          <div className={styles.content}>
            <div className={styles.modal_header}>
              <div className={styles.room_card}>
                <h4>Create Review</h4>
                <div className={styles.row}>
                  <label>Title</label>
                  <input
                    className={styles.input_create_review}
                    type="text"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                  />
                </div>
                <div className={styles.row}>
                  <label>Description</label>
                  <input
                    className={styles.input_create_review}
                    type="text"
                    value={reviewDescription}
                    onChange={(e) => setReviewDescription(e.target.value)}
                  />
                </div>
                <div
                  className={styles.row}
                  style={{
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <button
                    onClick={handleCreateRoomReview}
                    className={styles.submit_btn}
                  >
                    Create
                  </button>
                </div>
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

export default CreateRoomReview;
