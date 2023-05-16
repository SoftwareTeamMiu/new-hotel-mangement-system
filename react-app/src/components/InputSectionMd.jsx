import './css/InputSectionMd.scss'

const InputSectionMd = ({label}) => {
  return(
    <div class="InputSectionMd">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <div class="Bar"></div>
    </div>
  )
}

export default InputSectionMd;