import axios from "axios";
import { apiBaseUrl } from "./constants";

const client = axios.create();

client.defaults.baseURL = apiBaseUrl;

export default client;
