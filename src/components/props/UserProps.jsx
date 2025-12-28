export const UserProps = ({ user }) => {
  return (
    <>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h3>Company: {user.job.company}</h3>
    </>
  );
};
