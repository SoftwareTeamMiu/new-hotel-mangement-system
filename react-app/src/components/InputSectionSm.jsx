import './css/InputSectionSm.scss'

const InputSectionSm = ({label}) => {
  return (
    <div class="InputSectionSm">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <input class="Bar"></input>
    </div>
  )
}

export default InputSectionSm;