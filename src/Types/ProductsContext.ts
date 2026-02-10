import { createContext } from "react";
import type { Product } from "./Product";

type ProductsContextType = {
  products: Product[];
  loading: boolean;
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProduct: (updatedProduct: Product) => void;
};

export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType,
);
