import './css/MenuOption.scss'

const MenuOption = props => {
  const handleOnClick = e => {
    props.onClick(e)
  }

  return (
    <div class="MenuOption"
      onClick={handleOnClick}
      style={props.style}
    >
      <div class="Text">
        {props.text}
      </div>
    </div>
  )
}

export default MenuOption;