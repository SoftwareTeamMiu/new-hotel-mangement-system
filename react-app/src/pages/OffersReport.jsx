import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainHeader from '../components/MainHeader';
import InputSectionSm from '../components/InputSectionSm';
import Btn from '../components/Btn';
import Table from '../components/Table';
import './css/OffersReport.scss';
import { getAllOffers, createOffer } from '../services/OfferService';
import OfferModel from '../models/OfferModel';

const OffersReport = () => {
  const [formDataObj, setFormDataObj] = useState({});
  const [latestId, setLatestId] = useState(0);
  const [data, setdata] = useState([]);

  const expirationDateInputChange = (value) =>
    setFormDataObj({ ...formDataObj, ExpirationDate: String(value) });
  const percentageInputChange = (value) =>
    setFormDataObj({ ...formDataObj, percentage: Number(value) });

  const onSubmit = () => {
    console.log(formDataObj);
    createOffer(formDataObj).then(() => {
      window.location.reload(); // Refresh the page after creating an offer
    });
  };

  useEffect(() => {
    getAllOffers().then((response) => {
      if (response && response.length > 0) {
        const lastId = response[response.length - 1].id;
        setLatestId(lastId + 1);
        setdata(
          response.map((obj) => new OfferModel(obj.id, obj.percentage, obj.expirationDate))
        );
      } else {
        setLatestId(1);
      }
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
            <InputSectionSm label="Id" disabled={true} defaultValue={latestId} />
            <InputSectionSm onInputChange={percentageInputChange} label="Percentage" />
            <InputSectionSm onInputChange={expirationDateInputChange} label="Expiration Date" />
          </div>
          <Btn onClick={onSubmit} text="Submit" />
        </div>
        <Table
          dataArr={data}
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
