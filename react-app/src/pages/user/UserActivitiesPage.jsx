import UserHeader from "../../components/UserHeader";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserActivities from "./components/UserActivities";

function UserActivitiesPage() {
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
        if (user.role.roleTitle !== "User") {
          navigate("/login");
        }
        setName(user.name);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <UserHeader user_name={name} />
      <UserActivities />
    </>
  );
}

export default UserActivitiesPage;
