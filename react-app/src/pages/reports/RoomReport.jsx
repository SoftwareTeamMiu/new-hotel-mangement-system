import { useEffect, useState } from "react";
import RoomReportDropDowns from "../../components/RoomReportDropDown";
import RoomModel from "../../models/RoomModel";
import {
  getRoomTypes,
  getRoomStaueses,
  getRoomOffers,
} from "../../services/RoomService";
import MessageModal from "../../components/MessageModal";

const RoomTypeReport = () => {
  const columns = ["id", "price", "roomType", "roomStatus", "offer"];
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [roomTypes, setRoomTypes] = useState([]);
  const [roomOffers, setRoomOffers] = useState([]);
  const [roomStatueses, setRoomStatueses] = useState([]);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const roomTypesFromServer = await getRoomTypes();
      if (
        roomTypesFromServer.status === 200 ||
        roomTypesFromServer.response.status === 200
      ) {
        setRoomTypes(roomTypesFromServer.data);
      } else {
        setErrorMessage(roomTypesFromServer.message);
        handleOpen();
        return;
      }
    };

    const fetchRoomOffers = async () => {
      const roomStatuesesFromServer = await getRoomOffers();
      if (
        roomStatuesesFromServer.status === 200 ||
        roomStatuesesFromServer.response.status === 200
      ) {
        setRoomOffers(roomStatuesesFromServer.data);
      } else {
        setErrorMessage(roomStatuesesFromServer.message);
        handleOpen();
        return;
      }
    };

    const fetchRoomStatueses = async () => {
      const roomStatuesesFromServer = await getRoomStaueses();
      if (
        roomStatuesesFromServer.status === 200 ||
        roomStatuesesFromServer.response.status === 200
      ) {
        setRoomStatueses(roomStatuesesFromServer.data);
        setLoading(false);
      } else {
        setErrorMessage(roomStatuesesFromServer.message);
        handleOpen();
        setLoading(false);
        return;
      }
    };

    fetchRoomTypes();
    fetchRoomOffers();
    fetchRoomStatueses();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <MessageModal
            open={open}
            close={handleClose}
            error_message={errorMessage}
          />
          <RoomReportDropDowns
            reportName="Room"
            columns={columns}
            apiBaseUrl="room"
            model={RoomModel}
            roomTypes={roomTypes}
            roomOffers={roomOffers}
            roomStatueses={roomStatueses}
          />
        </div>
      )}
    </>
  );
};

export default RoomTypeReport;
