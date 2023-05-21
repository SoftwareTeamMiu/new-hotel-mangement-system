import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import MessageModal from "../../../components/MessageModal";
import { getAllRooms } from "../../../services/UserService";

function UserViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  useEffect(() => {
    document.title = "View Rooms";
    const fetchRooms = async () => {
      await getAllRooms()
        .then((res) => {
          console.log(res.data);
          setRooms(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setErrorMessage("Error with fetching rooms");
          handleOpen();
        });
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
          backgroundColor: "yellow",
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
              return <RoomCard key={room.id} room={room} />;
            })
          : null}
      </div>
    </div>
  );
}

export default UserViewRooms;
