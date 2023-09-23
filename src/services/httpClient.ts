import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.baseURL = "https://b460-223-38-24-245.ngrok-free.app/";
httpClient.defaults.headers["ngrok-skip-browser-warning"] = "69420";

export default httpClient;
