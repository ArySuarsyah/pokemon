import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: "https://www.eginugraha.com",
    // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers,
  });
  return instance;
};

export default http;