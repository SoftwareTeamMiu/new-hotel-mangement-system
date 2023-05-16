import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/OffersReport.scss'

const OffersReport = () => {
  return (
    <div class="OfferReport">
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Offers"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id"/>
            <InputSectionSm label="Percentage"/>
            <InputSectionSm label="Expiration Date"/>
          </div>
          <Btn text="Submit"/>
        </div>
        <Table column9=" " column8=" " column7=" " column6=" " column5=" " column4=" " column3="Expiration Date" column2="Percentage" column1="Id" header="Offers"/>
      </div>
    </div>
  )
}

export default OffersReport;