import axios from "axios";

const axiosIsnatnce = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

export default axiosIsnatnce;
