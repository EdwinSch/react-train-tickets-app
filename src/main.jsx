import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Global Styles
import "./global-styles.css";
// Context
import AppContext from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
