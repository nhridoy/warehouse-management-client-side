import axios from "axios";

const jwtToken = (email) => {
  // GET ACCESS TOKEN
  axios
    .post(`http://localhost:5000/login`, {
      email,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export default jwtToken;
