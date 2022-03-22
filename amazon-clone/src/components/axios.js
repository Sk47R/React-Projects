import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-afeb1/us-central1/api", // the Api (cloud function) URL
});

export default instance;
