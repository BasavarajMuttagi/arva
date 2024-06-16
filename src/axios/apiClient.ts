import axios from "axios";

function apiClient() {
  const token = import.meta.env.VITE_TOKEN;
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default apiClient();
