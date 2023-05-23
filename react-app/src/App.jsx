// import ReviewReport from "./pages/ReviewReport";
import OffersReport from "./pages/OffersReport";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Routes, Route } from "react-router-dom";
import UserMainPage from "./pages/user/UserMainPage";
import UserReservations from "./pages/user/UserReservationsPage";
import UserCheckoutPage from "./pages/user/UserCheckoutPage";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<UserMainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myreservations" element={<UserReservations />} />
        <Route path="/checkout" element={<UserCheckoutPage />} />
      </Routes> */}
      <OffersReport />

    </>
  );
}

export default App;
