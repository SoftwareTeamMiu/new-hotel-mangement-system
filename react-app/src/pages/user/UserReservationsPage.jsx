import UserHeader from "../../components/UserHeader";
import UserReservations from "./components/UserReservations";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserMainPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "User Main Page";
    // console.log(user);
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        setName(user.name);
      }
    };
    checkAuth();
  });

  return (
    <>
      <UserHeader user_name={name} />
      <UserReservations />
    </>
  );
}

export default UserMainPage;
