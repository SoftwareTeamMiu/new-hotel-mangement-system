import NavLink from './NavLink';
import './css/Sidebar.scss'

const Sidebar = () => {
  return(
    <div class="Sidebar">
      <div class="Logo">
        <div class="HMS">
          HMS
        </div>
      </div>
      <div class="Navigation">
        <div class="Upper">
          <NavLink pageName="Users"/>
          <NavLink pageName="Reservations"/>
          <NavLink pageName="Rooms"/>
          <NavLink pageName="Room Type"/>
          <NavLink pageName="Room Status"/>
        </div>
        <div class="Lower">
          <NavLink pageName="Logout"/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;