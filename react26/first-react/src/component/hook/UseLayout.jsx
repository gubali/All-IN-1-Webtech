import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";

export default function UseLayout() {
  const ref = useRef(null);
  useEffect(() => {
    // console.log("first useEffet");
  }, []);
  useLayoutEffect(() => {
    // console.log("useLayoutEffect: Runs before DOM paint");
    // console.log(ref.current.innerHTML);
  }, []);

  return (
    <>
      <div ref={ref}>UseLayout</div>
    </>
  );
}
