import axios from "axios";

export const makerequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});