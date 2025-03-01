import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}
