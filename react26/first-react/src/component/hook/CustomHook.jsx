import React from "react";
import useToggle from "../../hooks/UseToggle";
import { NavLink, Outlet } from "react-router";
export default function CustomHook() {
  const [value, toggleValue] = useToggle(true);
  return (
    <>
      <NavLink className={""} to={"useActionState"}>
        Use Action State
      </NavLink>
      <NavLink className={""} to={"useRef"}>
        Use Ref
      </NavLink>
      <Outlet />
      <h2>Toggle - Custom Hook</h2>
      <button onClick={() => toggleValue()}>Toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <br />
      {value ? <h1>Im'm custom hook!</h1> : null}-------
    </>
  );
}
