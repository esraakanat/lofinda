// utils/apiUtils.js
import axios from "axios";
import { getCookie } from "./cookies";

const adminApiReq = async (url, method = "GET", body = null) => {
  const adminToken = getCookie("auth-admin-token");

  // if (!adminToken) window.location.href = "/auth/admin/login";
  const config = {
    method,
    url: `${window.api}${url}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "auth-admin-token": adminToken,
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

export default adminApiReq;
