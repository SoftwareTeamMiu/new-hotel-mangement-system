import './css/MainHeader.scss'

const MainHeader = ({headTitle,username}) => {
  return (
    <div class="MainHeader">
      <div class="TitleSection">
        <div class="HeadTitle">
          {headTitle}
        </div>
      </div>
      <div class="Account">
        <div class="Username">
          {username}
        </div>
      </div>
    </div>
  )
}

export default MainHeader;