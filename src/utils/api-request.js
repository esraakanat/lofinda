// utils/apiUtils.js
import axios from "axios";
import { setCookie } from "./cookies";

const apiRequest = async (url, method = "GET", body = null) => {
  const config = {
    method,
    url: `${window.api}${url}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (body) {
    config.data = body;
  }

  try {
    const response = await axios(config);

    const token = response.headers["auth-user-token"];
    if (token) {
      setCookie("auth-user-token", token);
      window.location.href = "/";
    }
    const adminToken = response.headers["auth-admin-token"];
    if (adminToken) {
      setCookie("auth-admin-token", token);
      window.location.href = "/administration/dashboard";
    }

    return response.data;
  } catch (error) {
    console.error("Error making request:", error);
    throw error;
  }
};

export default apiRequest;
