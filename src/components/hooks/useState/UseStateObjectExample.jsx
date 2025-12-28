import { useState } from "react";

export const UseStateObjectExample = () => {
  const [product, setProduct] = useState({
    name: "Vivo T1 5G",
    price: 12000
  });

  return (
    <>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>

      <button
        onClick={() =>
          setProduct({ ...product, price: product.price + 1000 })
        }
      >
        Increase Price
      </button>
    </>
  );
};
