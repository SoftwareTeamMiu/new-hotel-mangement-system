import { useEffect, useState } from 'react';
import './css/InputSectionLg.scss'

export const InputSectionLg = ({label,onInputChange,disabled = false,defaultValue}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Call the callback function passed from the parent component
    onInputChange(value);
  };

  return (
    <div class="InputSectionLg">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <input 
        class="Bar"
        value={inputValue}
        onChange={handleInputChange}
        disabled={disabled}
      ></input>
    </div>
  )
}
export default {InputSectionLg};