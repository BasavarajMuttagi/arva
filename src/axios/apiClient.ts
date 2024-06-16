import axios from "axios";

function apiClient() {
  const token = import.meta.env.VITE_TOKEN;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default apiClient();
