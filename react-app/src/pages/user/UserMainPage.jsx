import UserHeader from "../../components/UserHeader";
// import UserCheckout from "./components/UserCheckout";
// import UserReservations from "./components/UserReservations";
import UserViewRooms from "./components/UserViewRooms";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserMainPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "User Main Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (token == null) {
        navigate("/login");
      } else {
        setName(user.name);
        setLoading(false);
        // console.log("set loading to false done");
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <UserHeader user_name={name} />
          <UserViewRooms />
        </>
      )}
    </>
  );
}

export default UserMainPage;
