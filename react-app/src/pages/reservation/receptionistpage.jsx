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
    document.title = "Receptionist Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        console.log("token not found");
      } else {
        setName(user.name);
        console.log("token found");
      }
    };
    checkAuth();
  });

  return (
    <>
      <Header user_name={name} />
      {console.log("ReceptionistPage")}
      <Table />
    </>
  );
}

export default Receptionistpage;
