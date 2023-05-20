import './css/InputSectionMd.scss'

const InputSectionMd = ({label}) => {
  return(
    <div class="InputSectionMd">
      <div class="LabelLayout">
        <div class="Label">
          {label}
        </div>
      </div>
      <input class="Bar"></input>
    </div>
  )
}

export default InputSectionMd;