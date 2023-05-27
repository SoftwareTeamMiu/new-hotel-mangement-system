import RoomStatusReport from "./pages/reports/RoomStatusReport";
import RoomReport from "./pages/reports/RoomReport";

import { Routes, Route } from "react-router-dom";
import RoomTypeReport from "./pages/reports/RoomTypeReport";
import OffersReport from "./pages/reports/OffersReport";
import ReviewReport from "./pages/reports/ReviewReport";
import ActivityReport from "./pages/reports/ActivityReport";
import PaymentMethodReport from "./pages/reports/PaymentMethodReport"

const AdminPortal = props => {
  return (
    <Routes>
      <Route path="/roomstatus" element={<RoomStatusReport />} />
      <Route path="/room" element={<RoomReport />} />
      <Route path="/roomtype" element={<RoomTypeReport />} />
      <Route path="/offer" element={<OffersReport />} />
      <Route path="/review" element={<ReviewReport />} />
      <Route path="/activities" element={<ActivityReport />} />
      <Route path="/paymentmethod" element={<PaymentMethodReport />} />
    </Routes>
  )
}

export default AdminPortal;