import Header from "./header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import UserContextProvider from "../context/UserContextProvider";

export default function Layout() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </>
  );
}
