import axios from "axios";
const API_BASE_URL = axios.create({
  baseURL: "http://localhost:3000/api",
});
export default API_BASE_URL;
