import axios from "axios";

export const api = axios.create({
  baseURL: "http://78.24.218.191:3000",
  headers: { "Content-Type": "application/json" },
});
