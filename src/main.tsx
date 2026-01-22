import React from "react";
import ReactDOM from "react-dom/client";
import { AppThemeProvider } from "@company/commons/ui";
import { ToastProvider } from "@company/commons/store";
import { ModalProvider } from "@company/commons/modal";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <ToastProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ToastProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
