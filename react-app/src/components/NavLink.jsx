import './css/NavLink.scss'

const NavLink = ({pageName}) => {
  return (
    <div class="NavLink">
      <div class="Text">
        {pageName}
      </div>
    </div>
  )
}

export default NavLink;