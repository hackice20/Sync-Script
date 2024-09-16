import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Assuming you are using app.css now instead of styles.css

// Create the root element for the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

