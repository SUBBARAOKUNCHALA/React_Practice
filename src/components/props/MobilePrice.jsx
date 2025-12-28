export const MobilePrice = ({ mobile, price, features }) => {
  const total = price + price * 0.1;

  return (
    <>
      <h1>Mobile: {mobile}</h1>
      <h2>Price: {price}</h2>
      <h2>Total (10% tax): {total}</h2>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </>
  );
};
