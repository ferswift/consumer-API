import { useEffect, useState } from "react";
import { getProductsService } from "../Services/ProductsService";
import { ProductsContext } from "./ProductsContext";
import type { ChildrenProps } from "../Types/children";

export const ProductsProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsService()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
