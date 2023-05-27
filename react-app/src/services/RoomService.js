import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const getRoomTypes = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let response = await axios.get(`${baseUrl}/roomtype`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
    return error;
  }
};

export const getRoomStaueses = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let response = await axios.get(`${baseUrl}/roomstatus`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
    return error;
  }
};

export const getRoomOffers = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let response = await axios.get(`${baseUrl}/offers`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
    return error;
  }
};
