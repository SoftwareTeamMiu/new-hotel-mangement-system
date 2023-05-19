import './css/InputSectionLg.scss'

const InputSectionLg = ({label}) => {
  return (
    <div class="InputSectionLg">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <input class="Bar"></input>
    </div>
  )
}

export default InputSectionLg;