import axios from "axios";

const baseUrl = "http://localhost:8080/api";


export const getReservations = async () => {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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

  export const getReservationsStatus = async () => {
    const token = localStorage.getItem("token");
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      let response = await axios.get(`${baseUrl}/reservationstatus`, { headers });
      return response;
    } catch (error) {
      console.log("Error from try catch:", error);
    }
  };

  export const postReservationsStatus = async () => {
    const token = localStorage.getItem("token");
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        let response = await axios.get(`${baseUrl}/reservationstatus`, { headers });
        return response;
        } catch (error) {
        console.log("Error from try catch:", error);
        }
    };

    export const makeReservationstatus = async (reservationstatus) => {
        const token = localStorage.getItem("token");
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
          let response = await axios.post(`${baseUrl}/reservationstatus`, reservationstatus, {
            headers,
          });
          return response;
        } catch (error) {
          console.log("Error from try catch:", error);
        }
      };
      

      export const updateReservation = async (id, data) => {
        const token = localStorage.getItem("token");
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
          console.log("data" +data.reservation_status_id)
          let response = await axios.put(`${baseUrl}/reservation/${id}`, data,{
            headers,
          });
          return response;
        } catch (error) {
          console.log("Error from try catch:", error);
        }
      };
      
  
  