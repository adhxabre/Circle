import { Outlet, Navigate } from "react-router-dom";

export function PrivateAuthRoute() {
  const login = true;

  return login ? <Outlet /> : <Navigate to="/login" />;
}
