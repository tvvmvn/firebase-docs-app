import { Outlet } from "react-router";
import { useAuth } from "./AuthProvider";
import Form from "./Form";

export default function ProtectedRoute() {
  
  const { user } = useAuth()

  if (!user) {
    return <Form />
  }

  return <Outlet />
}