import Report from '../../components/Report'
import ActivityModel from '../../models/ActivityModel'

const ActivityReport = () => {
    const columns = ['id', 'durationHrs', "date", "hostName"]
  
    return(
      <Report
        reportName = 'Activity'
        columns = {columns}
        apiBaseUrl='activities'
        model = {ActivityModel}
      />
    )
  }
  
  export default ActivityReport