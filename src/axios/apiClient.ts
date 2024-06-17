import axios from "axios";
import useCoffeeStore from "../store";

function apiClient() {
  const token = useCoffeeStore.getState().token;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default apiClient();
