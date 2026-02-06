import Header from "./header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import UserContextProvider from "../context/UserContextProvider";
import { ThemeProvider } from "../context/Thems";
import { useEffect, useState } from "react";

export default function Layout() {
  const [themeMode, setThemeMode] = useState('');

  const lightTheme = () => setThemeMode('');
  const darkTheme = () => setThemeMode("dark");

  //const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeThemeToggle: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    e.target.checked ? darkTheme() : lightTheme();
  useEffect(() => {
    const htmlClassList = document.documentElement.classList;
    if (themeMode === "dark") {
      htmlClassList.add("dark");
    } else {
      htmlClassList.remove("dark");
    }
  }, [themeMode]);

  // useEffect(() => {
  //   const htmlElem = document.documentElement.classList;
  //   htmlElem?.remove("light", "dark");
  //   htmlElem?.add(themeMode);
  // }, [themeMode]);

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeThemeToggle}
          checked={themeMode === "dark"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">
          Toggle Theme
        </span>
      </label>
      <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
        <UserContextProvider>
          <Header />
          <div className="container mx-auto px-4">
            <Outlet />
          </div>
          <Footer />
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}
