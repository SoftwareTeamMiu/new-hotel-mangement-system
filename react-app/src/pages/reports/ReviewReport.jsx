import Report from '../../components/Report'
import ReviewModel from '../../models/ReviewModel'

const ReviewReport = () => {
    const columns = ['id' , "user" , "review_title" , "review_description", "room"]
  
    return(
      <Report
        reportName = 'Review'
        columns = {columns}
        apiBaseUrl='review'
        model = {ReviewModel}
      />
    )
  }
  
  export default ReviewReport