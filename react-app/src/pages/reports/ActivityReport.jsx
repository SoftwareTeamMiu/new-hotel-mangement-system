import Report from "../../components/Report";
import ActivityModel from "../../models/ActivityModel";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const ActivityReport = () => {
  const columns = ["id", "durationHrs", "date", "hostName"];
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
  return (
    <Report
      reportName="Activity"
      columns={columns}
      apiBaseUrl="activities"
      model={ActivityModel}
    />
  );
};

export default ActivityReport;
