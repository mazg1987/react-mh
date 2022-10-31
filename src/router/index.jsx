import React from "react";
import { Routes, Route } from "react-router-dom";
import Manhua from "../pages/manhua";
import World from "../pages/world";
import Me from "../pages/me";

function RouterMap() {
  return (
    <Routes>
      <Route path="/" element={<Manhua></Manhua>}></Route>
      <Route path="/world" element={<World></World>}></Route>
      <Route path="/me" element={<Me></Me>}></Route>
      <Route path="*" element={<Manhua />} />
    </Routes>
  );
}

export default RouterMap;
