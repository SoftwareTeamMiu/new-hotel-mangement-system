import './css/Btn.scss'

const Btn = ({text,onClick}) => {
  const handleOnClick = (event) => onClick()

  return (
    <div class="Btn"
      onClick={handleOnClick}
    >
      <div class="Text">
        {text}
      </div>
    </div>
  )
}

export default Btn;