import React, { useState, useEffect } from "react";
import styles from "./css/UserCheckout.module.css";
import DropdownMenu from "../../../components/DropdownMenu";
import DatePicker from "../../../components/DatePicker";
import {
  getPaymentMethods,
  getRoomById,
  makeReservation,
} from "../../../services/UserService";
import MessageModal from "../../../components/MessageModal";
export default function UserCheckout() {
  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format the date as "YYYY-MM-DD"
  const formattedDate = tomorrow.toISOString().slice(0, 10);
  const [paymentMethodsKeys, setPaymentMethodsKeys] = useState([]);
  const [paymentMethodsValues, setPaymentMethodsValues] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [rooms, setRooms] = useState([]);
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [onDelete, setOnDelete] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleSelectionMethod = (selectedValue) => {
    console.log("Selected Payment Method:", selectedValue);
    setSelectedPaymentMethod(selectedValue);
  };

  const handleSelectionStartDate = (selectedValue) => {
    console.log("Start value:", selectedValue);
    setStartDate(selectedValue);
  };

  const handleSelectionEndDate = (selectedValue) => {
    console.log("End Date value:", selectedValue);
    setEndDate(selectedValue);
  };

  const handleMakeReservation = async () => {
    if (
      selectedPaymentMethod === "" ||
      startDate === "" ||
      endDate === "" ||
      rooms.length === 0
    ) {
      setErrorMessage("Please fill all the fields");
      handleOpen();
      return;
    } else {
      console.log("Make Reservation");
      console.log(rooms);
      let reservation = {
        payment_method_id: selectedPaymentMethod,
        reservation_start_date: startDate,
        reservation_end_date: endDate,
        rooms: rooms.map((item) => item.id),
        reservation_status_id: "1",
      };
      console.log(reservation);
      await makeReservation(reservation)
        .then((res) => {
          setErrorMessage("Reservation made successfully");
          handleOpen();
          console.log(res);
          localStorage.removeItem("reservationRooms");
          setRooms([]);
          setOnDelete(!onDelete);
        })
        .catch((err) => {
          setErrorMessage("Error while making reservation");
          handleOpen();
        });
    }
  };

  useEffect(() => {
    document.title = "View Rooms";
    const fetchPaymentMethods = async () => {
      await getPaymentMethods()
        .then((res) => {
          setPaymentMethodsKeys(res.data.map((item) => item.id));
          setPaymentMethodsValues(res.data.map((item) => item.method_name));
          setLoading(false);
        })
        .catch((err) => {
          setErrorMessage("Error while fetching payment methods");
          setLoading(false);
          handleOpen();
        });
    };

    const fetchRooms = async () => {
      let roomsIds = JSON.parse(localStorage.getItem("reservationRooms"));
      const fetchedRooms = [];
      if (
        roomsIds === null ||
        roomsIds === undefined ||
        roomsIds.length === 0
      ) {
        setErrorMessage("Please fill all the fields");
        handleOpen();
        return;
      }
      for (let i = 0; i < roomsIds.length; i++) {
        const res = await getRoomById(roomsIds[i]);
        const existingRoom = rooms.some((item) => item.id === res.data.id);

        if (!existingRoom) {
          fetchedRooms.push(res.data);
        }
      }

      setRooms((prevRooms) => [...prevRooms, ...fetchedRooms]);
    };

    fetchPaymentMethods();
    fetchRooms();
  }, [onDelete]);

  return (
    <div>
      {loading === true ? <div>Loading...</div> : null}
      {loading === false && rooms.length > 0 ? (
        <>
          <MessageModal
            open={open}
            close={handleClose}
            error_message={errorMessage}
          />
          <div className={styles.first_row}>
            <div>
              <DropdownMenu
                keys={paymentMethodsKeys}
                values={paymentMethodsValues}
                onSelect={handleSelectionMethod}
                title="Select Payment Method"
              />
            </div>
            <div className={styles.first_row}>
              <div
                style={{
                  marginRight: "20px",
                }}
              >
                Start Date
                <DatePicker
                  startDate={formattedDate}
                  onSelect={handleSelectionStartDate}
                />
              </div>
              <div>
                End Date
                <DatePicker
                  startDate={startDate}
                  onSelect={handleSelectionEndDate}
                />
              </div>
            </div>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
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
                  <td>
                    <button
                      onClick={() => {
                        const newRooms = rooms.filter(
                          (item) => item.id !== room.id
                        );
                        setRooms(newRooms);
                        localStorage.setItem(
                          "reservationRooms",
                          JSON.stringify(newRooms.map((item) => item.id))
                        );
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
              marginTop: "20px",
            }}
          >
            <button onClick={handleMakeReservation} className={styles.btn_sbmt}>
              Make Reservation
            </button>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>No rooms selected</h1>
        </div>
      )}
    </div>
  );
}
