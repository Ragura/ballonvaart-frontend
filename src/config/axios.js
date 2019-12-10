import Vue from "vue";
import axios from "axios";

const HTTP = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/" : "http://localhost:7000"
});

HTTP.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = HTTP;

export default HTTP;
