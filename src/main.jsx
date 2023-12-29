import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./api/server";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/router.jsx";
import { loadCartItems } from "./features/cart/cartSlice.js";
const queryClient = new QueryClient();
store.dispatch(loadCartItems);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
