import { Link, NavLink } from "react-router";
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-4 mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            {user ? user : "Please login"}
            {/* Nav Links - always in a row */}
            <ul className="flex flex-row items-center space-x-6 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/currencyConverter"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  Currency Converter
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/user/1"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="todoList"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`
                  }
                >
                  ToDo List
                </NavLink>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
