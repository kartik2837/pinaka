import axios from "axios";
const API = axios.create({ baseURL: "https://pinaka1.onrender.com/api" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.authorization = token;
  return req;
});

export default API;
