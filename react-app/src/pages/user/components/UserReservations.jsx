import React, { useState, useEffect } from "react";
import styles from "./css/UserCheckout.module.css";
import {
  getReservations,
  deleteReservation,
} from "../../../services/UserService";
import MessageModal from "../../../components/MessageModal";

function UserReservations() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [onDelete, setOnDelete] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  useEffect(() => {
    document.title = "View Reservations";

    const fetchReservations = async () => {
      await getReservations()
        .then((res) => {
          setReservations(res.data.map((reservation) => reservation));
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          setErrorMessage("Error while fetching payment methods");
          setLoading(false);
          handleOpen();
        });

      if (onDelete) {
        fetchReservations();
        setOnDelete(false);
      } else {
        // setLoading(false);
      }
    };
    fetchReservations();
  }, [onDelete]);
  return (
    <div>
      {loading === true ? <div>Loading...</div> : null}
      {loading === false && reservations.length > 0 ? (
        <>
          <MessageModal
            open={open}
            close={handleClose}
            error_message={errorMessage}
          />
          {reservations.map((reservation) => (
            <>
              <div
                style={{
                  color: "Black",
                  marginTop: "12px",
                  marginBottom: "12px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Reservaion No: {reservation.id}
              </div>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Price</th>
                    <th>Statues</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={reservation.id}>
                    <td>{reservation.start_date}</td>
                    <td>{reservation.end_date}</td>
                    <td>{reservation.total_price}</td>
                    <td>{reservation.reservationStatus.status}</td>
                    <td>{reservation.paymentMethods.method_name}</td>
                    <td>
                      <button
                        onClick={() => {
                          console.log("object");
                          deleteReservation(reservation.id);
                          setOnDelete(true);
                        }}
                        className={styles.btn_delete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <div
                style={{
                  color: "Black",
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Rooms
              </div> */}
              <br />
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th>Room No</th>
                    <th>Size</th>
                    <th>Floor</th>
                    <th>Original Price</th>
                    <th>Offer Percentage</th>
                    <th>Price after offer</th>
                  </tr>
                </thead>
                <tbody>
                  {reservation.rooms.map((room) => (
                    <tr key={room.id}>
                      <td>{room.id}</td>
                      <td>{room.roomType.size}</td>
                      <td>{room.roomType.location}</td>
                      <td>{room.price}</td>
                      <td>
                        {room.offer === null ? 0 : room.offer.percentage * 100}{" "}
                        %
                      </td>
                      <td>
                        {room.offer === null
                          ? room.price
                          : room.price * room.offer.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ))}
          {/* <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total Price</th>
                <th>Statues</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.start_date}</td>
                  <td>{reservation.end_date}</td>
                  <td>{reservation.total_price}</td>
                  <td>{reservation.reservationStatus.status}</td>
                  <td>{reservation.paymentMethods.method_name}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log("object");
                        deleteReservation(reservation.id);
                        setOnDelete(true);
                      }}
                      className={styles.btn_delete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>Rooms</h1>
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
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) =>
                reservation.rooms.map((room) => (
                  <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.roomType.size}</td>
                    <td>{room.roomType.location}</td>
                    <td>{room.price}</td>
                    <td>
                      {room.offer === null ? 0 : room.offer.percentage * 100} %
                    </td>
                    <td>
                      {room.offer === null
                        ? room.price
                        : room.price * room.offer.percentage}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>*/}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>No Reservations</h1>
        </div>
      )}
    </div>
  );
}

export default UserReservations;
