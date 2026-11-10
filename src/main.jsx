import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import AuthProvider from "./context/AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify/unstyled";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        newestOnTop
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
