import Btn from "./Btn";
import InputSectionSm from "./InputSectionSm";
import DateSectionSm from "./DateSectionSm";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
import Table from "./Table";
import "./css/Report.scss";

import { getAll, createOne, updateOne, deleteOne } from "../services/Service";
import React, { useEffect, useState } from "react";

const Report = (props) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = tomorrow.toISOString().slice(0, 10);
  const [dataArr, setDataArr] = useState(); // Array of Objects representing database data (with sub-objects replaced with values)
  const [valDataArr, setValDataArr] = useState();
  const [idDataArr, setIdDataArr] = useState();
  const [formDataObj, setFormDataObj] = useState(new props.model()); // Object containing the data of the form fields currently
  const [formDataId, setFormDataId] = useState(); // Id of the form id field
  const [latestId, setLatestId] = useState(); // The last id assigned to an object in the database
  const [admin_username, setAdmin_username] = useState("Admin"); // The last id assigned to an object in the database

  // Debugger
  useEffect(() => {
    const Debugobj = {
      dataArr: dataArr,
      valDataArr: valDataArr,
      idDataArr: idDataArr,
      formDataObj: formDataObj,
      formDataId: formDataId,
      latestId: latestId,
    };
    setAdmin_username(JSON.parse(localStorage.getItem("user")).username);
    console.log("Debugobj");
    console.log(Debugobj);
  }, [dataArr, valDataArr, idDataArr, formDataObj, formDataId, latestId]);

  // Utility for refreshing the page
  const refresh = () => window.location.reload(false);
  // Utility for traversing the Data Array for a certain object id
  const findObjFromId = (dataArr, id) =>
    dataArr.find((dataObj) => dataObj.id === id);

  /* --------- Event Handlers --------- */
  // Handler for updating the Form Data Obj with each new input
  const onInputChange = (value, field) =>
    setFormDataObj({ ...formDataObj, [field]: value });
  // Handler for clearing the values of the Form Data Obj for new input
  const onClear = () => {
    setFormDataObj(new props.model());
    setFormDataId("");
  };
  // Handler for submitting the Form Data Obj to the database
  const onSubmit = () => {
    if (findObjFromId(dataArr, formDataId)) {
      let postObj = props.model.postObjConstructor(formDataObj);
      console.log(postObj);
      updateOne(props.apiBaseUrl, postObj, formDataId).then(refresh());
    } else {
      let postObj = props.model.postObjConstructor(formDataObj);
      console.log(postObj);
      createOne(props.apiBaseUrl, postObj).then(refresh());
    }
  };
  // Handler for displaying the values of the selected data row in the form input fields
  const onRowClick = (e, id) => {
    const selectedObj = findObjFromId(idDataArr, id);
    setFormDataObj(selectedObj);
    setFormDataId(id);
    console.log(formDataObj);
  };
  // Handler for deleting the selected data row from the database
  const onDelete = () => {
    deleteOne(props.apiBaseUrl, formDataId).then(refresh());
  };

  // Dynamic Fields
  const formFields = props.columns.map((columnName) => {
    if (columnName == "id") {
      return (
        <InputSectionSm
          label={columnName}
          defaultValue={formDataId}
          disabled={true}
        />
      );
    } else if (columnName.toLowerCase().includes("date")) {
      return (
        <DateSectionSm
          label={columnName}
          defaultValue={formDataObj[columnName]}
          onInputChange={onInputChange}
        />
      );
    } else {
      return (
        <InputSectionSm
          label={columnName}
          defaultValue={formDataObj[columnName]}
          onInputChange={onInputChange}
        />
      );
    }
  });
  // Dynamic Table Columns
  const TableCols = {};
  for (let i = 1; i <= props.columns.length; i++) {
    TableCols[`column${i}`] = props.columns[i - 1];
  }

  // GET Rooms
  useEffect(() => {
    getAll(props.apiBaseUrl).then((data) => {
      const dataArr = data;
      const lastDataId = data[data.length - 1].id;

      setDataArr(dataArr);
      setLatestId(lastDataId);

      setValDataArr(dataArr.map((obj) => props.model.valConstructor(obj)));
      setIdDataArr(dataArr.map((obj) => props.model.idConstructor(obj)));
    });
  }, []);

  return (
    <div class="Report">
      <Sidebar />
      <div class="Main">
        <MainHeader username={admin_username} headTitle={props.reportName} />
        <div class="Form">
          <div class="Row">{formFields}</div>
          {/* <div class="Row">
            <InputSectionSm label="Id" disabled={true}  defaultValue={formDataId} />
            <InputSectionSm label="Status"  onInputChange={statusInputChange}   defaultValue={formDataObj.status} />
          </div> */}
          <div class="Row">
            <Btn onClick={onSubmit} text="Submit" />
            <Btn onClick={onClear} text="Clear" />
            <Btn onClick={onDelete} text="Delete" />
          </div>
        </div>
        <Table
          onClick={onRowClick}
          dataArr={valDataArr}
          columnsObj={TableCols}
          header={props.reportName}
        />
      </div>
    </div>
  );
};

export default Report;
