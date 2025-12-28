import { useState } from "react";

export const EcommercePriceUpdater = () => {
  const price = 4000;
  const [discount, setDiscount] = useState(0);

  const finalPrice = discount > price ? price : price - discount;

  return (
    <>
      <h1>Vivo T1 5G</h1>
      <p>Original Price: {price}</p>
      <p>Final Price: {finalPrice}</p>

      <input
        type="number"
        onChange={(e) => setDiscount(Number(e.target.value))}
      />
    </>
  );
};
