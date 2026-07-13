import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createBooking = (data) => API.post("/bookings/create", data);

export const createOrder = (data) => API.post("/payment/create-order", data);

export const verifyPayment = (data) => API.post("/payment/verify", data);
