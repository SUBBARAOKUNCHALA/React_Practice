import { Props } from "../components/props/Props";
import { EmpDetails } from "../components/props/EmpDetails";
import { Counter } from "../components/hooks/useState/Counter";

export const PracticeDashboard = () => {
  return (
    <>
      <h1>React Practice Playground</h1>

      <Props name="Subbu" age={21} />
      <EmpDetails EmpName="John" EmpRole="Developer" EmpExp={5} />

      <Counter name="Bujji" />
    </>
  );
};
