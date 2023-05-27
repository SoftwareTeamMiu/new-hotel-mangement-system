import React from "react";
import Table from "./components/table";
import Header from "./components/header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Receptionistpage() {
  console.log("ReceptionistPage");
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "Activities Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (token == null) {
        navigate("/login");
      } else {
        if (user.role.roleTitle !== "Receptionist") {
          navigate("/login");
        }
        setName(user.name);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <Header user_name={name} />
      <Table />
    </>
  );
}

export default Receptionistpage;
