import React, { useEffect, useState } from 'react';
import { getReservations, deleteReservation, getReservationsStatus, updateReservation } from '../../../services/ReservationService';
import DropdownMenu from "../../../components/DropdownMenu";
import deletebtn from "../css/deletebtn.css";
import savebtn from "../css/savebtn.css";
import tablestyle from "../css/tablestyle.css";

function TableComponent() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [onDelete, setOnDelete] = useState(false);
  const [ReservationStatusKeys, setReservationStatusKeys] = useState([]);
  const [ReservationStatusValues, setReservationStatusValues] = useState([]);
  const [selectedReservationStatus, setSelectedReservationStatus] = useState("");
  const [refreshPage, setRefreshPage] = useState(false);
  
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleSelectionMethod = (selectedValue) => {
    console.log("Selected RoomStatus:", selectedValue);
    setSelectedReservationStatus(selectedValue);
  };

  const handleMakeReservationstatus = async (reservation_id) => {
      let reservationstatus = {
        reservation_status_id: selectedReservationStatus.toString(),
      };
      console.log(reservationstatus);
      await updateReservation(reservation_id,reservationstatus)
        .then((res) => {
          setErrorMessage("Reservationstatus updated successfully");
          handleOpen();
          console.log(res);
          setRefreshPage(true);
        })
        .catch((err) => {
          setErrorMessage("Error while updating reservationstatus");
          handleOpen();
        });
    }


  useEffect(() => {
    document.title = "View Reservations";
    const fetchRoomStatus = async () => {
      await getReservationsStatus()
        .then((res) => {
          setReservationStatusKeys(res.data.map((item) => item.id));
          setReservationStatusValues(res.data.map((item) => item.status));
          setLoading(false);
        })
        .catch((err) => {
          setErrorMessage("Error while fetching Room Status");
          setLoading(false);
          handleOpen();
        });
    };  
    const fetchReservations = async () => {
      try {
        const res = await getReservations();
        setReservations(res.data.map((reservation) => reservation));
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        setErrorMessage("Error while fetching reservations");
        setLoading(false);
        handleOpen();
      }

      if (onDelete) {
        fetchReservations();
        setOnDelete(false);
      } else {
        setLoading(false);
      }
      
    };
      
    fetchReservations();
    fetchRoomStatus(); 
    if (refreshPage) {
      window.location.reload();
    }
  }, [onDelete, refreshPage]);
  
  return (
    <div>
      {loading === true ? <div>Loading...</div> : null}
      {loading === false && reservations.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>All Reservations:</h1>
          </div>
          <table className='table-container'>
            <thead>
              <tr className='tableheader'>
                <th>User Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Change Status</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr className='tabledata' key={reservation.id}>
                 <td>{reservation.customer.name}</td>
                  <td>{reservation.start_date.substring(0, 10)}</td>
                  <td>{reservation.end_date.substring(0, 10)}</td>
                  <td>{reservation.total_price}</td>
                  <td>{reservation.reservationStatus.status}</td>
                  <td>
                    <DropdownMenu
                      keys={ReservationStatusKeys}
                      values={ReservationStatusValues}
                      onSelect={handleSelectionMethod}
                      title="Select Reservation Status"
                    />
                  </td>
                  <td>{reservation.paymentMethods.method_name}</td>
                  <td>
                  <button
                    className='deletebtn'
                      onClick={() => {
                        const confirmed = window.confirm("Are you sure you want to delete this reservation?");
                        if (confirmed) {
                          deleteReservation(reservation.id);
                          setOnDelete(true);
                        }
                      }}
                    >
                      Delete
                  </button>

                    <button className='savebtn' onClick={() => handleMakeReservationstatus(reservation.id)} >
                      Save 
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
export default TableComponent;
