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
