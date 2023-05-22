import Btn from "../components/Btn"
import InputSectionSm from "../components/InputSectionSm"
import MainHeader from "../components/MainHeader"
import Sidebar from "../components/Sidebar"
import Table from "../components/Table"

import './css/RoomStatusReport.scss'

const RoomStatusReport = () => {

  return (
    <div class="RoomStatusReport">
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Room Status"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id"/>
            <InputSectionSm label="Status"/>
          </div>
          <div class="Row">
            <Btn text="Submit"/>
            <Btn text="Clear"/>
            <Btn text="Delete"/>
          </div>
        </div>
        <Table column9=" " column8=" " column7=" " column6=" " column5=" " column4=" " column3=" " column2="Status" column1="Id" header="Room Status"/>
      </div>
    </div>
  )
}

export default RoomStatusReport