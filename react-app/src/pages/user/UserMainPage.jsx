import UserHeader from "../../components/UserHeader";
import UserCheckout from "./components/UserCheckout";
import UserReservations from "./components/UserReservations";
import UserViewRooms from "./components/UserViewRooms";

function UserMainPage() {
  return (
    <>
      <UserHeader />
      <UserViewRooms />
      {/* <UserCheckout /> */}
      {/* <UserReservations /> */}
    </>
  );
}

export default UserMainPage;
