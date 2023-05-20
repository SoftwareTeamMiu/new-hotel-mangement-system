import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/OffersReport.scss';
import getAllOffers from '../services/OfferService';
import OfferModel from '../models/OfferModel';

const OffersReport = () => {
  
  const [data, setdata] = useState([]);

  useEffect(() => {
    getAllOffers().then((response) => {
      console.log(response[0]);
      setdata(response.map((obj) => new OfferModel(obj.id, obj.percentage, obj.expirationDate)));
    });
  }, []);

  console.log(data);

  return (
    <div className="OfferReport">
      <Sidebar />
      <div className="Main">
        <MainHeader username="Admin" headTitle="Offers" />
        <div className="Form">
          <div className="Row">
            <InputSectionSm label="Id" />
            <InputSectionSm label="Percentage" />
            <InputSectionSm label="Expiration Date" />
          </div>
          <Btn text="Submit" />
        </div>
        <Table
          dataArr={data}
          column9=" "
          column8=" "
          column7=" "
          column6=" "
          column5=" "
          column4=" "
          column3="Expiration Date"
          column2="Percentage"
          column1="Id"
          header="Offers"
        />
      </div>
    </div>
  );
};

export default OffersReport;
