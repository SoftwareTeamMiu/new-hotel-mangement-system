import React from "react";
import RoomCard from "./RoomCard";

function UserViewRooms() {
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
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
}

export default UserViewRooms;
