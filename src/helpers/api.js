// imports
import axios from "axios";

const SESO_BASE_URL = axios.create({
  // baseURL: "https://seso-backend.herokuapp.com/",
  // baseURL: "http://localhost:3000"
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
});

export { SESO_BASE_URL };
