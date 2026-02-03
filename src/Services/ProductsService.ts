import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProductsService() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}
