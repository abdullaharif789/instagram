import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Index from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="index" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
