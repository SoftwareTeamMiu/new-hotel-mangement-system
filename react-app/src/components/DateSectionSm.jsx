import { useEffect, useState } from "react";
import "./css/InputSectionSm.scss";
import DatePicker from "./DatePicker";

const InputSectionSm = ({
  label,
  onInputChange,
  disabled = false,
  defaultValue,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = tomorrow.toISOString().slice(0, 10);

  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleInputChange = (selectedDate) => {
    const value = selectedDate;
    setInputValue(value);
    // Call the callback function passed from the parent component
    onInputChange(value, label);
  };
  return (
    <div class="InputSectionSm">
      <div class="LabelLayout">
        <div class="Label">{label}</div>
      </div>
      <DatePicker
        value={inputValue}
        onSelect={handleInputChange}
        disabled={false}
      />
    </div>
  );
};

export default InputSectionSm;
