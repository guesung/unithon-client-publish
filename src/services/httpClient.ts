import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.baseURL = "https://6e8d-223-38-21-131.ngrok-free.app/";
httpClient.defaults.headers["ngrok-skip-browser-warning"] = "69420";

export default httpClient;
