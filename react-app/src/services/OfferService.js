import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwNjhkMTljYS03MGI3LTQ0NTUtOTliZC1kNDkyNjJmNjg4Y2YiLCJleHAiOjE2ODQ2MDQyNTF9.kZq9yw2ZtXfMlCHMIPvwnpJx4n3sIl53prYfNFH-6U4';

const getAllOffers = async () => {
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



export default getAllOffers;
