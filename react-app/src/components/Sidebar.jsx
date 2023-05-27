import NavLink from './NavLink';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './css/Sidebar.scss'
import './css/navbtn.css'


/*
localStorage.clear();
    navigate("/login");
*/

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (pageName) => {
    navigate(`/${pageName.toLowerCase()}`); // Assuming the page names match the paths
  };
  
  return(
    <div class="Sidebar">
      <div class="Logo">
        <div class="HMS">
          HMS
        </div>
      </div>
      <div class="Navigation">
        <div class="Upper">
          <button
             class="navbtn"
             to="/admin/roomstatus"
             onClick={() => handleNavigation("admin/roomstatus")}
             >Room Status</button>
          <button
             class="navbtn"
             to="/admin/roomtype"
             onClick={() => handleNavigation("admin/roomtype")}
             >Room Type</button>
          <button
             class="navbtn"
             to="/admin/room"
             onClick={() => handleNavigation("admin/room")}
             >Room</button>
          <button
             class="navbtn"
             to="/admin/offer"
             onClick={() => handleNavigation("admin/offer")}
             >Offers</button>
          <button
             class="navbtn"
             to="/admin/review"
             onClick={() => handleNavigation("admin/review")}
             >Reviews</button>
          <button
             class="navbtn"
             to="/admin/activities"
             onClick={() => handleNavigation("admin/activities")}
             >Activities</button>
          <button
             class="navbtn"
             to="/admin/paymentmethod"
             onClick={() => handleNavigation("admin/paymentmethod")}
             >Payment Method</button>
          <div class="logout">
            <button 
              class="navbtn"
              id='btn'
              onClick={() =>{ 
                localStorage.clear() ;
                navigate("/login");
              }}
              >Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;