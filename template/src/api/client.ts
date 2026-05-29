import { API_TIMEOUT } from "@app/constants/api.const";
import { env } from "@app/constants/env.const";
import axios from "axios";

const client = axios.create({
	baseURL: env.VITE_API_BASE_URL,
	timeout: API_TIMEOUT,
});

export default client;
