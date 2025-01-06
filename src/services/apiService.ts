import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

export const STORAGE_URL = import.meta.env.VITE_REACT_API_STORAGE_URL;

export const isAxiosError = axios.isAxiosError;
export default apiClient;