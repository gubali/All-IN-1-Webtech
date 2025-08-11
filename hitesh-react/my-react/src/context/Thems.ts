import React from "react";
import { useContext } from "react";
type ThemeContextType = {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  themeMode: "light",
  darkTheme: () => {
    console.log("Dark theme activated!");
  },
  lightTheme: () => {
    console.log("Light theme activated!");
  },
});

export const ThemeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}
