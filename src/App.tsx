import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import ParcelPage from "./pages/ParcelPage";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <ParcelPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
