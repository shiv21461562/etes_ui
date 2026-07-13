import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const sendContact = (data) => {
  return API.post("/contact", data);
};