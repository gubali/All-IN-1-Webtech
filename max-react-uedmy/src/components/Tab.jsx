import { Children } from "react";

export default function Tab({ Children, buttons }) {
  return (
    <>
     {buttons}
     {Children}
    </>
  );
}
