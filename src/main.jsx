import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { AuthContextComponent } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme accentColor="yellow" appearance="dark">
      <BrowserRouter>
        <AuthContextComponent>
          <App />
        </AuthContextComponent>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

