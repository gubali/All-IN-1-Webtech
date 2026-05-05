import { useEffect } from "react";

export default function ClockTimer({ color }) {
  useEffect(() => {
    console.log("component mounte");
    console.log("Selected Color", color);
  }, [color]);
  return (
    <>
      <h1 style={{ color: "white", backgroundColor: color }}>Clock</h1>
      <p style={{ color: color }}>Welcome dynamic Color Change!</p>
    </>
  );
}
