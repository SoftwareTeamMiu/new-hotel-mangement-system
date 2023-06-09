import axios from "axios";
// import { RegisterModel } from "../../../models/AuthModel";

const baseUrl = "http://localhost:8080/auth";

export const register = async (RegisterModel) => {
  try {
    var data = {
      name: RegisterModel.name,
      email: RegisterModel.email,
      password: RegisterModel.password,
      role_id: 1,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    let response = await axios.post(`${baseUrl}/register`, data, { headers });

    // console.log("new res " + response.data);
    return response.data;
  } catch (error) {
    // console.log("Error from try catch:", error);
    return error.response.data;
  }
};

export const login = async (LoginModel) => {
  try {
    var data = {
      email: LoginModel.email,
      password: LoginModel.password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    let response = await axios.post(`${baseUrl}/login`, data, { headers });
    return response;
    // localStorage.setItem("token", response.data.token);
    // return "Loing Successfully";
  } catch (error) {
    console.log("Error from try catch:", error);
    return error.response.data;
  }
};
