import Report from "../../components/Report";
import OfferModel from "../../models/OfferModel";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const OffersReport = () => {
  const columns = ["id", "percentage", "expirationDate"];
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
      reportName="Offer"
      columns={columns}
      apiBaseUrl="offers"
      model={OfferModel}
    />
  );
};

export default OffersReport;
