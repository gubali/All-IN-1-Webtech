import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./component/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Currency from "./component/currency/Currency";
import User, { gitHUbInfoLoader } from "./component/user/User";
import ToDoList from "./component/todo/Todo";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "currencyConverter", element: <Currency /> },
//       { path: "user/:id", element: <User /> },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="currencyConverter" element={<Currency />} />
      <Route path="todoList" element={<ToDoList />} />
      <Route path="user/:id" element={<User />} loader={gitHUbInfoLoader} />
    </Route>
  )
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
