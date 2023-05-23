import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const getAllRooms = async () => {
  try {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/paymentmethod`, { headers });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const makeReservation = async (reservation) => {
  try {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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

export const getLocationsAndSizes = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/roomtype/filters`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const getRoomsByLocation = async (location) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }; ///room/location/1
    let response = await axios.get(`${baseUrl}/room/location/${location}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};

export const getRoomsBySize = async (size) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let response = await axios.get(`${baseUrl}/room/size/${size}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log("Error from try catch:", error);
  }
};
