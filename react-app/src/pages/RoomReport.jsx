import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import InputSectionMd from '../components/InputSectionMd';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/RoomReport.scss';

import { useEffect, useState } from 'react';
import { getAllRooms , createRoom , updateRoom , deleteRoom } from '../services/RoomService';
import { RoomModel } from '../models/RoomModel'

const RoomReport = () => {

  const [dataIdArr, set_dataIdArr] = useState() // Array of Objects representing database data (with sub-objects replaced with ids)
  const [dataValArr, set_dataValArr] = useState() // Array of Objects representing database data (with sub-objects replaced with values)
  const [formDataObj, setFormDataObj] = useState({}) // Object containing the data of the form fields currently
  const [formDataId, setFormDataId] = useState() // Id of the form id field
  const [latestId, setLatestId] = useState() // The last id assigned to an object in the database

  const refresh = () => {
    window.location.reload(false);
  }
  
  // Functions for updating the form data object on each input change
  const priceInputChange = (value) => setFormDataObj({...formDataObj, price : Number(value)});
  const typeInputChange = (value) => setFormDataObj({...formDataObj, room_type_id : Number(value)});
  const statusInputChange = (value) => setFormDataObj({...formDataObj, room_status_id : Number(value)});
  const offersInputChange = (value) => setFormDataObj({...formDataObj, offer_id : Number(value)});

  // Event Handler to clear the values of the form fields for new input
  const onClear = () => {
    setFormDataObj({
      price: '',
      room_type_id: '',
      room_status_id: '',
      offer_id: ''
    })
    setFormDataId(latestId+1)
  }

  // Tarverse the Data Array for a certain object
  const findObjFromId = (dataArr , id) => dataArr.find(dataObj => dataObj.id === id)

  // GET One Room
  // Event handler for displaying the values of the selected data row in the form input fields
  const handleOnRowClick = (e,id) => {
    const selectedObj = findObjFromId(dataIdArr, id)
    setFormDataObj(selectedObj)
    setFormDataId(id)
  }

  // POST / PUT Room
  // Event handler for submitting the form fields data to the database
  const onSubmit = () => {
    if (formDataId > latestId) {
      createRoom(formDataObj);
    } else {
      updateRoom(formDataObj, formDataId)
    }
    refresh()
  }

  // GET Rooms
  // Middleware for fetching the data from the database
  const fetchData = () => {
    getAllRooms()
    .then(res => {
      const dataArrIdIncluded = res.data.map(obj => RoomModel.parsedIdConstructor(obj))
      const dataArrValIncluded = res.data.map(obj => RoomModel.parsedValConstructor(obj))
      const lastDataId = res.data[res.data.length-1].id

      set_dataIdArr(dataArrIdIncluded)
      set_dataValArr(dataArrValIncluded)
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
    deleteRoom(formDataId)
    refresh()
  }

  return (
    <div class="RoomModel">
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Rooms"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id" disabled={true} defaultValue={formDataId}/>
            <InputSectionSm onInputChange={priceInputChange} label="Price" defaultValue={formDataObj.price}/>
            <InputSectionSm onInputChange={typeInputChange} label="Room Type Id" defaultValue={formDataObj.room_type_id}/>
          </div>
          <div class="Row">
            <InputSectionSm onInputChange={statusInputChange} label="Room Status Id" defaultValue={formDataObj.room_status_id}/>
            <InputSectionMd onInputChange={offersInputChange} label="Offer Id" defaultValue={formDataObj.offer_id}/>
          </div>
          <div className='Row'>
            <Btn onClick={onSubmit} text="Submit"/>
            <Btn onClick={onClear} text="Clear"/>
            <Btn onClick={onDelete} text="Delete"/>
          </div>
        </div>
        <Table 
          onClick={handleOnRowClick} 
          dataArr={dataValArr} 
          column5="Room Type" 
          column4="Room Status" 
          column3="Offer Percentage" 
          column2="Price" 
          column1="Id" 
          header="Rooms"
        />
      </div>
    </div>
  )
}

export default RoomReport;