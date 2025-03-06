import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ColorProvider from "./ColorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
