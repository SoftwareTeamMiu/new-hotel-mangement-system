import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOWM4ZTU0Ny03YzUxLTRkODMtOWZjNi02NzgxOTViZmM2N2EiLCJleHAiOjE2ODQ4NjIxNzd9.Rxh_WfuVPNXSn5z6RfVoYn3KirCwe1nbDxEQ2kF3NzM';


export const createRoom = async (dataObj) => {
  const options = {
    url: 'http://localhost:8080/api/room',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: dataObj
  };

  try {
    return await axios(options);
    console.log("Axios Success");
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};

export const getAllRooms = async () => {
  const options = {
    url: 'http://localhost:8080/api/room',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    return await axios(options);
    console.log("Axios Success");
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};

export const updateRoom = async (dataObj,id) => {
  const options = {
    url: `http://localhost:8080/api/room/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: dataObj
  };

  try {
    return await axios(options);
    console.log("Axios Success");
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};

export const deleteRoom = async (id) => {
  const options = {
    url: `http://localhost:8080/api/room/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    return await axios(options);
    console.log("Axios Success");
  } catch (error) {
    console.log("Axios Error");
    console.log(error);
  }
};