import axios from 'axios';

const instance = axios.create({
  baseURL: `https://localhost:4000`, // Base url from env file
  timeout: 600000,
});

instance.interceptors.request.use(
  async reqConfig => {

    const accessToken = JSON.parse(localStorage.getItem("authUser"))
      ? JSON.parse(localStorage.getItem("authUser")).key
      : "";

    let headers;
    if (accessToken) {
      headers = {
        'Authorization': `token ${accessToken}`,
        'Content-Type': 'application/json'
      };
    } else {
      headers = {
        'Content-Type': 'application/json'
      };
    }
    return { ...reqConfig, headers };
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;