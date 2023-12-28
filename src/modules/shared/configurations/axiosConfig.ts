import axios from "axios";

// create axios instance
const PrivateKey = process.env.REACT_APP_PRIVATE_KEY;
const axiosInstance = axios.create({
  baseURL: "https://staging.mazaady.com/api/v1/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "private-key": PrivateKey,
  },
});

export default axiosInstance;
