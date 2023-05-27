import { useState, useRef, useEffect } from "react";
import MenuOption from "./MenuOption";

import "./css/InputSectionDrop.scss";

const InputSectionDrop = (props) => {
  const elmntRef = useRef(null);
  const [dropBarStyleObj, setDropBarStyleObj] = useState();
  const [fieldVal, setFieldVal] = useState("");

  if (props.empty) setFieldVal("");

  useEffect(() => {
    console.log(props.defaultValue);
    console.log(props.dataMenuVals);

    const id = props.dataMenuVals.forEach((data) => {
      if (data.id === props.defaultValue) {
        setFieldVal(data.value);
      }
    });
  }, [props.defaultValue]);

  useEffect(() => {
    const barElmnt = elmntRef.current;
    const barElmntHeight = parseInt(window.getComputedStyle(barElmnt).height);
    const barBtmVal = `${barElmntHeight - 32}px`;
    setDropBarStyleObj({
      bottom: [barBtmVal],
    });
  }, [elmntRef]);

  const handleOnOptionClick = (text, id) => {
    setFieldVal(text);
    props.onInputChange(id, props.label);
  };

  const [inputValue, setInputValue] = useState();

  const menuValsLabels = props.dataMenuVals.map((data) => {
    return (
      <MenuOption
        value_id={data.id}
        onClick={handleOnOptionClick}
        text={data.value}
      />
    );
  });

  return (
    <div class="InputSectionDrop">
      <div class="LabelLayout">
        <div class="Label">{props.label}</div>
      </div>
      <div class="Bar">{fieldVal}</div>

      <div className="DropBarCont">
        <div class="DropBar" ref={elmntRef} style={dropBarStyleObj}>
          {menuValsLabels}
          <div className="icon">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSectionDrop;
