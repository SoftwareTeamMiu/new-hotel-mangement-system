import './css/InputSectionSm.scss'

const InputSectionSm = ({label}) => {
  return (
    <div class="InputSectionSm">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <div class="Bar"></div>
    </div>
  )
}

export default InputSectionSm;