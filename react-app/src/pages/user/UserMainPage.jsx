import UserHeader from "../../components/UserHeader";
import UserCheckout from "./components/UserCheckout";
import UserViewRooms from "./components/UserViewRooms";

function UserMainPage() {
  return (
    <>
      <UserHeader />
      <UserViewRooms />
      {/* <UserCheckout /> */}
    </>
  );
}

export default UserMainPage;
