import './css/NavLinkActive.scss'

const NavLinkActive = ({pageName}) => {
  return (
    <div class="NavLinkActive">
      <div class="PageName">
        {pageName}
      </div>
    </div>
  )
}

export default NavLinkActive;