import React, { useState, useEffect } from "react";
import styles from "./css/UserCheckout.module.css";
import { getActivites } from "../../../services/UserService";
import MessageModal from "../../../components/MessageModal";

function UserActivities() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  useEffect(() => {
    document.title = "View Activites";

    const fetchActivities = async () => {
      const response = await getActivites();
      console.log(response.data);
      if (response.status === 200) {
        setActivities(response.data);
        setLoading(false);
      } else {
        setErrorMessage(response.response.data);
        handleOpen();
        return;
      }
    };
    fetchActivities();
  }, []);

  return (
    <div>
      {loading === true ? <div>Loading...</div> : null}
      {loading === false && activities.length > 0 ? (
        <>
          <MessageModal
            open={open}
            close={handleClose}
            error_message={errorMessage}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>Reservations</h1>
          </div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Host Name</th>
                <th>Duration Hours</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.hostName}</td>
                  <td>{activity.durationHrs}</td>
                  <td>{activity.date}</td>
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
          <h1>No Activities</h1>
        </div>
      )}
    </div>
  );
}

export default UserActivities;
