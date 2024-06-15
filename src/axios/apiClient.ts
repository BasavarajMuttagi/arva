import axios from "axios";

function apiClient() {
  const token = import.meta.env.VITE_TOKEN;
  return axios.create({
    baseURL: "https://arva-backend.vercel.app",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default apiClient();
