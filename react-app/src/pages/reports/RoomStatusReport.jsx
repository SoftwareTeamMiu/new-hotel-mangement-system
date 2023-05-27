import Report from '../../components/Report'
import RoomStatusModel from '../../models/RoomStatusModel'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

  
const RoomStatusReport = () => {
  const columns = ['id' , "status"]

  const navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "Activities Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (token == null) {
        navigate("/login");
      } else {
        if (user.role.roleTitle !== "Manager") {
          navigate("/login");
        }
      }
    };
    checkAuth();
  }, []);

  return(
    <Report
      reportName = 'Room Status'
      columns = {columns}
      apiBaseUrl='roomstatus'
      model = {RoomStatusModel}
    />
  )
}

export default RoomStatusReport