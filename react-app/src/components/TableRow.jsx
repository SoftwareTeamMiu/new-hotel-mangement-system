import './css/TableRow.scss'

const TableRow = ({value1,value2,value3,value4,value5,value6,value7,value8,value9}) => {
  return(
    <div class="TableRow">
      <div class="Value1">
        {value1}
      </div>
      <div class="Value2">
        {value2}
      </div>
      <div class="Value3">
        {value3}
      </div>
      <div class="Value4">
        {value4}
      </div>
      <div class="Value5">
        {value5}
      </div>
      <div class="Value6">
        {value6}
      </div>
      <div class="Value7">
        {value7}
      </div>
      <div class="Value8">
        {value8}
      </div>
      <div class="Value9">
        {value9}
      </div>
    </div>
  )
}

export default TableRow;