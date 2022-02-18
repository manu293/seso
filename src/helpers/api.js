// imports
import axios from "axios";

const SESO_BASE_URL = axios.create({
    baseURL: "https://seso-backend.herokuapp.com/",
    withCredentials: true,
});

export {
    SESO_BASE_URL
}