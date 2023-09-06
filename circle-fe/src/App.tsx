import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// private route
import { PrivateAuthRoute } from "./components/privateRoute/PrivateRoute";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateAuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
