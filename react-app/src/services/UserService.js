import axios from "axios";

const baseUrl = "http://localhost:8080/api";
const token = localStorage.getItem("token");

export const getAllRooms = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/room`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const getRoomById = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/room/${id}`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const getPaymentMethods = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/paymentmethod/`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const makeReservation = async (reservation) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.post(`${baseUrl}/reservation`, reservation, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const getReservations = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/reservation/user`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const deleteReservation = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let response = await axios.delete(`${baseUrl}/reservation/${id}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};
