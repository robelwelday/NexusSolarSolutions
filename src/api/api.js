import axios from "axios";

const api = axios.create({
  baseURL: "https://nexusbackend-2qiw.onrender.com/api", // <-- your backend URL
});

export default api;
