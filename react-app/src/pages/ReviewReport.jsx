import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import InputSectionLg from '../components/InputSectionLg';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/ReviewReport.scss'

const ReviewReport = () => {

  const data = [
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    },
    {
      name: 'ahmed',
      age: 28,
      gender: 'male'
    }
  ]

  return (
    <div class="ReviewReport">
      <Sidebar />
      <div class="Main">
        <MainHeader username="Admin" headTitle="Reviews"/>
        <div class="Form">
          <div class="Row">
            <InputSectionSm label="Id"/>
            <InputSectionSm label="CustomerId"/>
            <InputSectionSm label="Title"/>
            <InputSectionLg label="Description"/>
          </div>
          <Btn text="Submit"/>
        </div>
        <Table dataArr={data} column9=" " column8=" " column7=" " column6=" " column5=" " column4="Description" column3="Title" column2="Customer" column1="Id" header="Reviews"/>
      </div>
    </div>
  )
}

export default ReviewReport;