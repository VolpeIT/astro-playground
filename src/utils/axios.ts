import axios from "axios";
const Authorization = "l33hDPtjJK0emSag5NcJKdrJbWXUFpORTSih";

export const api_prod = axios.create({
  baseURL: "https://api.somosedison.com",
  headers: {
    Authorization,
  },
});

export const api_qa = axios.create({
  baseURL: "https://qa.api.somosedison.com/",
  headers: {
    Authorization,
  },
});

export const api_local = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization,
  },
});
