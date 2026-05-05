import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { SkillProvider } from "./context/SkillsContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SkillProvider>
        <App />
      </SkillProvider>
    </BrowserRouter>
  </StrictMode>,
);
