import axios from "axios";

const API_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const nextServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  withCredentials: true,
});
