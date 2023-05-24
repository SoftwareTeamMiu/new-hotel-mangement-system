import Btn from "./Btn"
import InputSectionSm from "./InputSectionSm"
import MainHeader from "./MainHeader"
import Sidebar from "./Sidebar"
import Table from "./Table"
import './css/Report.scss'

import { getAll, createOne, updateOne, deleteOne } from '../services/Service'
import { useState } from "react"

const Report = props => {
  const [dataArr, setDataArr] = useState() // Array of Objects representing database data (with sub-objects replaced with values)
  const [formDataObj, setFormDataObj] = useState(new props.model) // Object containing the data of the form fields currently
  const [formDataId, setFormDataId] = useState() // Id of the form id field
  const [latestId, setLatestId] = useState() // The last id assigned to an object in the database
  
  const refresh = () => {
    window.location.reload(false);
  }
  
  const onInputChange = (value,field) => formDataObj[field] = value;
  
  const columnsArr = props.columns
  // Dynamic Fields
  const formFields = columnsArr.map(columnName => {
    if (columnName == "id") {
      return <InputSectionSm label={columnName} defaultValue={formDataId} disabled={true} />
    } else {
      return (
        <InputSectionSm
          label={columnName}
          defaultValue={formDataObj[columnName]}
          onInputChange={onInputChange}
        />
      )
    }
  })
  // Dynamic Table Columns
  const TableCols = {}
  for (let i = 1; i <= columnsArr.length; i++) {
    TableCols[`column${i}`] = columnsArr[i-1]
  }

  // Event Handler to clear the values of the form fields for new input
  const onClear = () => {
    setFormDataObj(new props.model)
    setFormDataId(latestId+1)
    console.log(formDataObj);
  }

  // GET Rooms
  useState(() => {
    getAll(props.apiBaseUrl)
    .then(data => {
      const dataArr = data
      const lastDataId = data[data.length-1].id

      setDataArr(dataArr)
      setFormDataId(lastDataId + 1)
      setLatestId(lastDataId)
    })
  }, [])

  // GET One Room
  // Tarverse the Data Array for a certain object
  const findObjFromId = (dataArr , id) => dataArr.find(dataObj => dataObj.id === id)

  // POST / PUT Room
  // Event handler for submitting the form fields data to the database
  const onSubmit = () => {
    if (dataArr.includes(formDataObj)) {
      updateOne(props.apiBaseUrl, formDataObj, formDataId)
      .then(refresh())
    } else {
      createOne(props.apiBaseUrl, formDataObj)
      .then(refresh())
    }
  }

  // Event handler for displaying the values of the selected data row in the form input fields
  const onRowClick = (e,id) => {
    const selectedObj = findObjFromId(dataArr, id)
    setFormDataObj(selectedObj)
    setFormDataId(id)
  }

  // DELETE Room
  // Event handler for deleting the selected data row from the database
  const onDelete = () => {
    deleteOne(props.apiBaseUrl, formDataId)
    .then(refresh())
  }

  console.log(formFields);
  return (
    <div class='Report'>
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle={props.reportName}/>
        <div class="Form">
          <div class="Row">
            {formFields}
          </div>
          {/* <div class="Row">
            <InputSectionSm label="Id" disabled={true}  defaultValue={formDataId} />
            <InputSectionSm label="Status"  onInputChange={statusInputChange}   defaultValue={formDataObj.status} />
          </div> */}
          <div class="Row">
            <Btn onClick={onSubmit} text="Submit"/>
            <Btn onClick={onClear} text="Clear"/>
            <Btn onClick={onDelete} text="Delete"/>
          </div>
        </div>
        <Table 
          onClick={onRowClick} dataArr={dataArr}   
          columnsObj={TableCols} header={props.reportName}/>
      </div>
    </div>
  )
}

export default Report