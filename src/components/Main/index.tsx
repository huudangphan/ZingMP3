import { Recommned } from "../recommend";
import { Chart } from "../chart";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Recommned />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
};
export default Main;
