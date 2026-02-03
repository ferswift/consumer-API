import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
