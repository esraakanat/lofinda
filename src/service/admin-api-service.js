import adminApiReq from "../utils/adminApiWithAuth";

export const getStats = async () => {
  try {
    const response = await adminApiReq("/api/admin/stats", "GET");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (
  shipped,
  status,
  payment,
  limit = 10,
  offset = 0
) => {
  try {
    // Build the query string based on the parameters
    const queryParams = new URLSearchParams({
      shipped: shipped || "", // Only include if provided
      status: status || "",
      payment: payment || "",
      limit: limit.toString(),
      offset: offset.toString(),
    });

    // Send the GET request with the query parameters
    const response = await adminApiReq(
      `/api/admin/get-orders?${queryParams.toString()}`,
      "GET"
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (limit = 10, offset = 0) => {
  try {
    // Build the query string based on the parameters
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });

    // Send the GET request with the query parameters
    const response = await adminApiReq(
      `/api/admin/get-users?${queryParams.toString()}`,
      "GET"
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (
  category,
  published,
  limit = 10,
  offset = 0
) => {
  try {
    // Build the query string based on the parameters
    const queryParams = new URLSearchParams({
      category: category || "", // Only include if provided
      published: published || "",
      limit: limit.toString(),
      offset: offset.toString(),
    });

    console.log("Call from product");

    // Send the GET request with the query parameters
    const response = await adminApiReq(
      `/api/admin/get-products?${queryParams.toString()}`,
      "GET"
    );

    console.log("Call from product");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
