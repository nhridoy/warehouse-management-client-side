import axios from "axios";

const jwtToken = (email) => {
  // GET ACCESS TOKEN
  axios
    .post(`https://myventory-nhridoy.herokuapp.com/login`, {
      email,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export default jwtToken;
