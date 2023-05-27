import Report from '../../components/Report'
import OfferModel from '../../models/OfferModel'

const OffersReport = () => {
  const columns = ['id' , "percentage" , "expirationDate"]

  return(
    <Report
      reportName = 'Offer'
      columns = {columns}
      apiBaseUrl='offers'
      model = {OfferModel}
    />
  )
}

export default OffersReport