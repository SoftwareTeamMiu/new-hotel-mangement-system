import './css/Table.scss'
import TableRow from './TableRow' 

const Table = props => { console.log(props);
  const handleOnClick = (event,value1) => props.onClick(event,value1)
  
  let dataItems = []

  if(props.dataArr != null) {
    props.dataArr.forEach(dataObj => {
      const keysArr = Object.keys(dataObj)
      const valuesArr = keysArr.map((key) => dataObj[key])
      let propsObj = {}
    
      for (let i = 1; i <= valuesArr.length; i++) {
        propsObj[`value${i}`] = valuesArr[i-1]
      }

      const dataRow = (
        <TableRow {...propsObj} onClick={handleOnClick} />
      )

      dataItems.push(dataRow)
    });
  }  

  return (
    <div class="Table">
      <div class="Heading">
        {props.header}
      </div>
      <div class="TableHead">
        <div class="Column1">
          {props.columnsObj.column1}
        </div>
        <div class="Column2">
          {props.columnsObj.column2}
        </div>
        <div class="Column3">
          {props.columnsObj.column3}
        </div>
        <div class="Column4">
          {props.columnsObj.column4}
        </div>
        <div class="Column5">
          {props.columnsObj.column5}
        </div>
        <div class="Column6">
          {props.columnsObj.column6}
        </div>
        <div class="Column7">
          {props.columnsObj.column7}
        </div>
        <div class="Column8">
          {props.columnsObj.column8}
        </div>
        <div class="Column9">
          {props.columnsObj.column9}
        </div>
      </div>
      {dataItems.map((row) => row)}
    </div>
  )
}

export default Table;