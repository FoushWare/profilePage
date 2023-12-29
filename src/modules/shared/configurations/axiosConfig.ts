import axios from "axios";

const baseURL = "https://staging.mazaady.com/api/v1/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "private-key": process.env.NEXT_PUBLIC_API_URL,
  },
});

export default axiosInstance;
