import "./css/MenuOption.scss";

const MenuOption = (props) => {
  const handleOnClick = (e) => {
    props.onClick(e.target.innerText, props.value_id);
    console.log(props.value_id);
  };

  return (
    <div class="MenuOption" onClick={handleOnClick} style={props.style}>
      <div class="Text">{props.text}</div>
    </div>
  );
};

export default MenuOption;
