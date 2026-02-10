import axios from "axios";
import type { Product } from "../Types/Product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProductsService() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}

export async function createProductService(product: Product) {
  const response = await axios.post(BASE_URL, product);
  return response.data;
}
