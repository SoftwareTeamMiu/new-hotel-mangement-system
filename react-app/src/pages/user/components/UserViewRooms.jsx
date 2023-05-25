import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import MessageModal from "../../../components/MessageModal";
import {
  getAllRooms,
  getLocationsAndSizes,
  getRoomsByLocation,
  getRoomsBySize,
} from "../../../services/UserService";
import DropdownMenu from "../../../components/DropdownMenu";

function UserViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reservationRooms, setReservationRooms] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [locations, setLocations] = useState([]);

  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleGetRoomsBySize = async (size) => {
    await getRoomsBySize(size)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        setErrorMessage("Error with fetching rooms");
        setLoading(false);
        handleOpen();
      });
  };

  const handleGetRoomsByLocation = async (locationId) => {
    await getRoomsByLocation(locationId)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        setErrorMessage("Error with fetching rooms");
        setLoading(false);
        handleOpen();
      });
  };

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
    };

    const fetchSizesLocations = async () => {
      await getLocationsAndSizes()
        .then((res) => {
          setSizes(res.data.sizes);
          setLocations(res.data.locations);
        })
        .catch((err) => {
          setErrorMessage("Error with fetching Locations and Sizes");
          setLoading(false);
          handleOpen();
        });
    };

    fetchRooms();
    fetchSizesLocations();
  }, []);
  console.log(rooms);
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <div
        style={{
          padding: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <input type="text" placeholder="Search" /> */}
        <div>
          <DropdownMenu
            keys={sizes}
            values={sizes}
            onSelect={handleGetRoomsBySize}
            title="Filter By Size"
          />
        </div>
        <div>
          <DropdownMenu
            keys={locations}
            values={locations}
            onSelect={handleGetRoomsByLocation}
            title="Filter By Location"
          />
        </div>
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
