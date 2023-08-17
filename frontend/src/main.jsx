import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import App from "./App";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
    errorElement: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
