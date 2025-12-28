export const SkillsProps = ({ age, isDeveloper, skills }) => {
  return (
    <>
      <h1>Age: {age}</h1>
      <h2>Is Developer: {isDeveloper ? "Yes" : "No"}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
