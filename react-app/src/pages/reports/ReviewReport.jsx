import ReportReadOnly from "../../components/ReportReadOnly";
import ReviewModel from "../../models/ReviewModel";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const ReviewReport = () => {
  const columns = ["id", "user", "review_title", "review_description", "room"];
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
    <ReportReadOnly
      reportName="Review"
      columns={columns}
      apiBaseUrl="review"
      model={ReviewModel}
    />
  );
};

export default ReviewReport;
