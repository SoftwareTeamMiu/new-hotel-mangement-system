import Report from '../../components/Report'
import RoomTypeModel from '../../models/RoomTypeModel'
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const RoomTypeReport = () => {
  const columns = ['id' , "size", "location"]
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
      reportName = 'Room Type'
      columns = {columns}
      apiBaseUrl='roomtype'
      model = {RoomTypeModel}
    />
  )
}

export default RoomTypeReport