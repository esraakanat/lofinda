// utils/apiUtils.js
import axios from "axios";
import { getCookie } from "./cookies";

const userApiReq = async (url, method = "GET", body = null) => {
	const token = getCookie('auth-user-token')

	if (!token) window.location.href = '/auth/login'
	const config = {
		method,
		url: `${window.api}${url}`,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"auth-user-token": token
		},
	};

	if (body) {
		config.data = body;
	}

	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {
		console.error("Error making request:", error);
		throw error;
	}
};

export default userApiReq;
