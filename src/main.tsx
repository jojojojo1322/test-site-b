import React from "react";
import ReactDOM from "react-dom/client";
import { AppThemeProvider } from "@company/commons/ui";
import { ToastProvider } from "@company/commons/store";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
