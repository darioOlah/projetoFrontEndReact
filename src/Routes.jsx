import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Team from "./Routes/Team";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/team" element={<Team />} />
      <Route path="/dentist/:matricula" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
