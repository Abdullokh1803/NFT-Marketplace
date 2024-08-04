import { Route, Routes } from "react-router-dom";
import { routedata } from "./route.d";

export const Router = () => {
  return (
    <Routes>
      {routedata.map((item, index) =>
        <Route key={index} element={<item.component />} path={item.path} />
      )}
    </Routes>
  );
};
