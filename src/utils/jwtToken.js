import interceptors from "./interceptors";

const jwtToken = (email) => {
  // GET ACCESS TOKEN
  interceptors
    .post(`/login`, {
      email,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export default jwtToken;
