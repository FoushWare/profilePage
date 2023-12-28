import axios from "axios";

// create axios instance
const axiosInstance = axios.create({
  baseURL: "https://staging.mazaady.com/api/v1/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
  },
});

export default axiosInstance;
