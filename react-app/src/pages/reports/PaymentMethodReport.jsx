import Report from "../../components/Report";
import PaymentMethodModel from "../../models/PaymentMethodModel";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const PaymentMethodReport = () => {
  const columns = ["id", "method_name", "method_description"];
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
      reportName="Payment Method"
      columns={columns}
      apiBaseUrl="paymentmethod"
      model={PaymentMethodModel}
    />
  );
};

export default PaymentMethodReport;
