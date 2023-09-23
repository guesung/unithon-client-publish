import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.baseURL = "https://cce8-223-38-24-245.ngrok.io/";
httpClient.defaults.withCredentials = true;

export default httpClient;
