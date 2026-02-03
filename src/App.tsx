import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
