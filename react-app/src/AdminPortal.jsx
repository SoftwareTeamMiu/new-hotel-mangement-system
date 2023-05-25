import RoomStatusReport from "./pages/reports/RoomStatusReport";
import RoomReport from "./pages/reports/RoomReport";

import { Routes, Route } from "react-router-dom";
import RoomTypeReport from "./pages/reports/RoomTypeReport";

const AdminPortal = props => {
  return (
    <Routes>
      <Route path="/roomstatus" element={<RoomStatusReport />} />
      <Route path="/room" element={<RoomReport />} />
      <Route path="/roomtype" element={<RoomTypeReport />} />
    </Routes>
  )
}

export default AdminPortal;