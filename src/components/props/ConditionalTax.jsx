export const ConditionalTax = ({ mobile, price, features }) => {
  const is5G = features.includes("5G");
  const taxRate = is5G ? 0.1 : 0.05;
  const total = price + price * taxRate;

  return (
    <>
      <h1>Mobile: {mobile}</h1>
      <h2>5G Supported: {is5G ? "Yes" : "No"}</h2>
      <h2>Total Price: {total}</h2>
    </>
  );
};
