import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const interceptors = axios.create({
  baseURL: "https://myventory-nhridoy.herokuapp.com",
});

// Add a request interceptor
interceptors.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
interceptors.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");
      signOut(auth);
    }
    return Promise.reject(error);
  }
);

export default interceptors;
