import UserHeader from "../../components/UserHeader";
import UserCheckout from "./components/UserCheckout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserMainPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "Checkout Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (token == null) {
        navigate("/login");
      } else {
        if (user.role.roleTitle !== "User") {
          navigate("/login");
        }
        setName(user.name);
        // console.log("set loading to false done");
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <UserHeader user_name={name} />
      <UserCheckout />
    </>
  );
}

export default UserMainPage;
