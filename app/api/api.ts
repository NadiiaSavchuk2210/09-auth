import { API_BASE_URL } from "@/constants";
import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
