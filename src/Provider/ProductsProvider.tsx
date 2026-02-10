import { useEffect, useState } from "react";
import {
  createProductService,
  getProductsService,
} from "../Services/ProductsService";
import { ProductsContext } from "../Types/ProductsContext";
import type { Product } from "../Types/Product";
import type { ChildrenProps } from "../Types/Children";

export const ProductsProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsService()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const addProduct = async (product: Product) => {
    const newProduct = await createProductService(product);

    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProduct = (productId: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );
  };

  return (
    <ProductsContext.Provider
      value={{ products, loading, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
