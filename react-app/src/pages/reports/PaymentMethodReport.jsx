import Report from "../../components/Report";
import PaymentMethodModel from "../../models/PaymentMethodModel";

const PaymentMethodReport = () => {
    const columns = ['id' , "method_name", "method_description"]
  
    return(
      <Report
        reportName = 'Payment Method'
        columns = {columns}
        apiBaseUrl='paymentmethod'
        model = {PaymentMethodModel}
      />
    )
  }
  
  export default PaymentMethodReport