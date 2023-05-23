import Report from '../components/Report'
import RoomTypeModel from '../models/RoomTypeModel'

const RoomTypeReport = () => {
  const columns = ['id' , 'size' , "location"]

  return(
    <Report
      reportName = 'Room Type'
      columns = {columns}
      apiBaseUrl='roomtype'
      model = {RoomTypeModel}
    />
  )
}

export default RoomTypeReport