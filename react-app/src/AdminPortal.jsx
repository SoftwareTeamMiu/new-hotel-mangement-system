import RoomStatusReport from "./pages/reports/RoomStatusReport";
import RoomReport from "./pages/reports/RoomReport";

import { Routes, Route } from "react-router-dom";
import RoomTypeReport from "./pages/reports/RoomTypeReport";
import OffersReport from "./pages/reports/OffersReport";

const AdminPortal = props => {
  return (
    <Routes>
      <Route path="/roomstatus" element={<RoomStatusReport />} />
      <Route path="/room" element={<RoomReport />} />
      <Route path="/roomtype" element={<RoomTypeReport />} />
      <Route path="/offer" element={<OffersReport />} />
    </Routes>
  )
}

export default AdminPortal;