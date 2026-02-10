import { useState } from "react";
import { useProducts } from "../hook/useProducts";

export const Home = () => {
  const { products, loading, updateProduct } = useProducts();
  const [title, setTitle] = useState("");

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <input
        placeholder="Novo título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>

          <button
            onClick={() =>
              updateProduct({
                ...product,
                title: title,
              })
            }
          >
            Atualizar título
          </button>
        </div>
      ))}
    </div>
  );
};
