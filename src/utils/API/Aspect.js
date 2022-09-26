import axios from "axios";

const apiURL = process.env.REACT_APP_APIURL;
const key = process.env.REACT_APP_KEY;


const Aspect = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${key}`, //development key
  },
});

export default Aspect;