// import ReviewReport from "./pages/ReviewReport";
// import OffersReport from "./pages/OffersReport";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Routes, Route } from "react-router-dom";
import UserMainPage from "./pages/user/UserMainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserMainPage />} />
      </Routes>
    </>
  );
}

export default App;
