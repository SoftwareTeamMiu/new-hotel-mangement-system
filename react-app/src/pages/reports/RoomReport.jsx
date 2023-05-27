import Report from '../../components/Report'
import RoomModel from '../../models/RoomModel'

const RoomTypeReport = () => {
  const columns = ['id' , 'price' , "roomType", "roomStatus", "offer", ]

  return( 
    <Report 
      reportName = 'Room'
      columns = {columns}
      apiBaseUrl='room'
      model = {RoomModel}
    />
  )
}

export default RoomTypeReport