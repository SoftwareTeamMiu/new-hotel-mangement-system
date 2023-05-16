import './css/InputSectionLg.scss'

const InputSectionLg = ({label}) => {
  return (
    <div class="InputSectionLg">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <div class="Bar"></div>
    </div>
  )
}

export default InputSectionLg;