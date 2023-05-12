import axios from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;

export const postData = (route: string, data: Object) => {
  return axios.post(route, data);
};
