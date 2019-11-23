import axios from "axios";

axios.defaults.baseURL = process.env.baseUrl || "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const sendMail = data => {
  return axios.post("mail", data);
};
