import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwNjhkMTljYS03MGI3LTQ0NTUtOTliZC1kNDkyNjJmNjg4Y2YiLCJleHAiOjE2ODQ2OTM0OTh9.a30-YGE-Gelat7qWJtTMkJjdluyyjHC_6MVvAU1r1iQ';

export const getAllOffers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/offers', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const createOffer = async (dataObj) => {
  const options = {
    url: 'http://localhost:8080/api/offers',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      offer_percentage: String(dataObj.percentage),
      offer_expiration_date: dataObj.ExpirationDate,
    },
  };

  try {
    const response = await axios(options);
    console.log('Axios Success');
    return response.data; // Return the response data if needed
  } catch (error) {
    console.log('Axios Error');
    console.log(error);
    throw error; // Rethrow the error to handle it at the caller's level
  }
};

