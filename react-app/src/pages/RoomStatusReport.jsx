import Report from '../components/Report'
import RoomStatusModel from '../models/RoomStatusModel'

const RoomStatusReport = () => {
  const columns = ['id' , "status"]

  return(
    <Report
      reportName = 'Room Status'
      columns = {columns}
      apiBaseUrl='roomstatus'
      model = {RoomStatusModel}
    />
  )
}

export default RoomStatusReport