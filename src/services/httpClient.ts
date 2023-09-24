import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.baseURL = "https://ddf1-223-38-18-170.ngrok-free.app/";
httpClient.defaults.headers["ngrok-skip-browser-warning"] = "69420";

export default httpClient;
