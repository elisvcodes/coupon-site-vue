import axios from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;

if (process.client) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}

export const postData = (route: string, data: Record<string, unknown>) => {
  return axios.post(route, data);
};

export const fetchData = (route: string) => {
  return axios.get(route);
};

export const putData = (route: string, data: Record<string, unknown>) => {
  return axios.put(route, data);
};
