import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import MessageModal from "../../../components/MessageModal";
import { getAllRooms } from "../../../services/UserService";

function UserViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reservationRooms, setReservationRooms] = useState([]);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleAddToReservation = (roomId, flag) => {
    if (flag === "0") {
      setReservationRooms([...reservationRooms, roomId]);
      localStorage.setItem(
        "reservationRooms",
        JSON.stringify([...reservationRooms, roomId])
      );
    } else {
      setReservationRooms(reservationRooms.filter((room) => room !== roomId));
      localStorage.setItem(
        "reservationRooms",
        JSON.stringify(reservationRooms.filter((room) => room !== roomId))
      );
    }
    // console.log(localStorage);
  };
  useEffect(() => {
    document.title = "View Rooms";
    const fetchRooms = async () => {
      await getAllRooms()
        .then((res) => {
          setRooms(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setErrorMessage("Error with fetching rooms");
          setLoading(false);
          handleOpen();
        });
      if (localStorage.getItem("reservationRooms") === null) {
        localStorage.setItem("reservationRooms", JSON.stringify([]));
      } else {
        setReservationRooms(
          JSON.parse(localStorage.getItem("reservationRooms"))
        );
      }

      // console.log(localStorage);
    };
    fetchRooms();
  }, []);
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <div
        style={{
          // backgroundColor: "yellow",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <input type="text" placeholder="Search" />
      </div>
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          justifyItems: "center",
        }}
      >
        <MessageModal
          open={open}
          close={handleClose}
          error_message={errorMessage}
        />
        {loading === true ? <div>Loading...</div> : null}
        {loading === false
          ? rooms.map((room) => {
              if (room.roomStatus.id === 1) {
                if (reservationRooms.includes(room.id)) {
                  return (
                    <RoomCard
                      key={room.id}
                      room={room}
                      flag="1"
                      onAcion={handleAddToReservation}
                    />
                  );
                } else {
                  return (
                    <RoomCard
                      key={room.id}
                      room={room}
                      flag="0"
                      onAcion={handleAddToReservation}
                    />
                  );
                }
              }
              return null;
            })
          : null}
      </div>
    </div>
  );
}

export default UserViewRooms;
