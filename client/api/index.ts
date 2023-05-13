import axios from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;
if (process.client) {
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("token");
}
export const postData = (route: string, data: Object) => {
  return axios.post(route, data);
};
