import axios from "axios";


const token = localStorage.getItem("token");

export const getAll = async (apiBaseUrl) => {
  const options = {
    url: `http://localhost:8080/api/${apiBaseUrl}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    console.log("Axios getAll");
    return (await axios(options)).data;
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};

export const createOne = async (apiBaseUrl, dataObj) => {
  const options = {
    url: `http://localhost:8080/api/${apiBaseUrl}`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: dataObj
  };

  try {
    console.log("Axios createOne");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
    console.log("Axios Data");
    console.log(dataObj);
  }
};

export const updateOne = async (apiBaseUrl, dataObj, id) => {
  const options = {
    url: `http://localhost:8080/api/${apiBaseUrl}/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: dataObj
  };

  try {
    console.log("Axios updateOne");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
    console.log("Axios Data");
    console.log(dataObj);
  }
};

export const deleteOne = async (apiBaseUrl, id) => {
  const options = {
    url: `http://localhost:8080/api/${apiBaseUrl}/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    console.log("Axios deleteOne");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};