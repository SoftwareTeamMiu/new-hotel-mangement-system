import Btn from "../components/Btn"
import InputSectionSm from "../components/InputSectionSm"
import MainHeader from "../components/MainHeader"
import Sidebar from "../components/Sidebar"
import Table from "../components/Table"
import './css/RoomStatusReport.scss'

import { useEffect, useState } from 'react';
import { getAllRoomStatus , createRoomStatus , updateRoomStatus , deleteRoomStatus } from '../services/RoomStatusService';
import { RoomStatusModel } from '../models/RoomStatusModel'

const RoomStatusReport = () => {


  const [dataArr, set_dataArr] = useState() // Array of Objects representing database data (with sub-objects replaced with values)
  const [formDataObj, setFormDataObj] = useState({}) // Object containing the data of the form fields currently
  const [formDataId, setFormDataId] = useState() // Id of the form id field
  const [latestId, setLatestId] = useState() // The last id assigned to an object in the database

  const refresh = () => {
    window.location.reload(false);
  }
  
  // Functions for updating the form data object on each input change
  const statusInputChange = (value) => setFormDataObj({...formDataObj, status : value});

  // Event Handler to clear the values of the form fields for new input
  const onClear = () => {
    setFormDataObj({
      status: ''
    })
    setFormDataId(latestId+1)
  }

  // Tarverse the Data Array for a certain object
  const findObjFromId = (dataArr , id) => dataArr.find(dataObj => dataObj.id === id)

  // GET One Room
  // Event handler for displaying the values of the selected data row in the form input fields
  const handleOnRowClick = (e,id) => {
    const selectedObj = findObjFromId(dataArr, id)
    setFormDataObj(selectedObj)
    setFormDataId(id)
  }

  // POST / PUT Room
  // Event handler for submitting the form fields data to the database
  const onSubmit = () => {
    if (formDataId > latestId) {
      createRoomStatus(formDataObj);
    } else {
      updateRoomStatus(formDataObj, formDataId)
    }
    refresh()
  }

  // GET Rooms
  // Middleware for fetching the data from the database
  const fetchData = () => {
    getAllRoomStatus()
    .then(res => {
      const dataArr = res.data
      const lastDataId = res.data[res.data.length-1].id

      set_dataArr(dataArr)
      setFormDataId(lastDataId + 1)
      setLatestId(lastDataId)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // DELETE Room
  // Event handler for deleting the selected data row from the database
  const onDelete = () => {
    deleteRoomStatus(formDataId)
    refresh()
  }

  return (
    <div class="RoomStatusReport">
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Room Status"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id" disabled={true} defaultValue={formDataId}/>
            <InputSectionSm label="Status" onInputChange={statusInputChange} defaultValue={formDataObj.status}/>
          </div>
          <div class="Row">
            <Btn onClick={onSubmit} text="Submit"/>
            <Btn onClick={onClear} text="Clear"/>
            <Btn onClick={onDelete} text="Delete"/>
          </div>
        </div>
        <Table 
          onClick={handleOnRowClick} dataArr={dataArr}  
          column2="Status" column1="Id" header="Room Status"/>
      </div>
    </div>
  )
}

export default RoomStatusReport