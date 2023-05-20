import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOWM4ZTU0Ny03YzUxLTRkODMtOWZjNi02NzgxOTViZmM2N2EiLCJleHAiOjE2ODQ2NzIyODN9.x7yzJy-UbisrzfQfxLGAiAlQmjOvXcXSJhJXKGeAuiM';

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