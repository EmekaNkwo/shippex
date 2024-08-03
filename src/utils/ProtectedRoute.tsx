import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = sessionStorage.getItem("username");

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  return user ? children : null;
};

export default ProtectedRoute;
