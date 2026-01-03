
import { CustomHook } from "../components/CustomeHooks/Customhooks";
import { Component1 } from "../components/props/Props Drilling/Component1";

export const PracticeDashboard = () => {
   let isAdmin=false
  return (
    <>
    <Component1 data={isAdmin} />
    </>
  );
};
