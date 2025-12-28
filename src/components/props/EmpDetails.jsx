export const EmpDetails = ({ EmpName, EmpRole, EmpExp }) => {
  return (
    <>
      <h1>Employee Name: {EmpName}</h1>
      <h2>Role: {EmpRole}</h2>
      <h2>Experience: {EmpExp} years</h2>
    </>
  );
};
