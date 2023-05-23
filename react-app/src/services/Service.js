import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOWM4ZTU0Ny03YzUxLTRkODMtOWZjNi02NzgxOTViZmM2N2EiLCJleHAiOjE2ODQ5NDg2Nzd9.bRtxCr04gO3kOhDKOitxVjCDsLUNKVIy8bVsPGg8dp0';

export const getAll = async (apiBaseUrl) => {
  const options = {
    url: `http://localhost:8080/api/${apiBaseUrl}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    console.log("Axios Success");
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
    console.log("Axios Success");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
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
    console.log("Axios Success");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
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
    console.log("Axios Success");
    return await axios(options);
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};