import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { SkillProvider } from "./context/SkillsContext.jsx";
import { ThemeProvider } from "./reusable/theme-context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SkillProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SkillProvider>
    </BrowserRouter>
  </StrictMode>,
);
