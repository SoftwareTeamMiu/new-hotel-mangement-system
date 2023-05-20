import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import InputSectionMd from '../components/InputSectionMd';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/RoomReport.scss';

import { useEffect, useState } from 'react';
import { getAllRooms , createRoom } from '../services/RoomService';
import { RoomModel } from '../models/RoomModel'

const RoomReport = () => {

  // POST Room
  const [formDataObj, setFormDataObj] = useState({})
  const [latestId, setLatestId] = useState()

  const priceInputChange = (value) => setFormDataObj({...formDataObj, price : Number(value)});
  const typeInputChange = (value) => setFormDataObj({...formDataObj, room_type_id : Number(value)});
  const statusInputChange = (value) => setFormDataObj({...formDataObj, room_status_id : Number(value)});
  const offersInputChange = (value) => setFormDataObj({...formDataObj, offer_id : Number(value)});

  const onSubmit = () =>{
    console.log(formDataObj);
    createRoom(formDataObj);
  }

  // GET Rooms
  const [dataArr, setDataArr] = useState()
  useEffect(() => {
    getAllRooms()
      .then(res => {
        let arr = res.data.map(obj => RoomModel.dataConstructor(obj))
        let lastId = arr[arr.length-1].id + 1 

        setDataArr(arr);
        setLatestId(lastId)
      })
      .catch(err => {
        console.log(err);
      })
  })

  return (
    <div class="RoomModel"> 
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Rooms"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id" disabled={true} defaultValue={latestId}/>
            <InputSectionSm onInputChange={priceInputChange} label="Price"/>
            <InputSectionSm onInputChange={typeInputChange} label="Room Type Id"/>
          </div>
          <div class="Row">
            <InputSectionSm onInputChange={statusInputChange} label="Room Status Id"/>
            <InputSectionMd onInputChange={offersInputChange} label="Offer Id"/>
          </div>
          <Btn onClick={onSubmit} text="Submit"/>
        </div>
        <Table dataArr={dataArr} column9=" " column8=" " column7=" " column6=" " column5="Room Type" column4="Room Status" column3="Offer Percentage" column2="Price" column1="Id" header="Rooms"/>
      </div>
    </div>
  )
}

export default RoomReport;