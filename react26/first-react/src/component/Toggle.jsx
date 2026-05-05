import { useState } from "react";

function Toggle() {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  function showAndHide() {
    setFlag(!flag);
  }
  function callCounter() {
    setCount((prev) => prev + 1);
  }
  function getLabels(count) {
    switch (count) {
      case 0:
        return "Zero";
      case 1:
        return "One";
      case 2:
        return "Two";
      default:
        return "Other";
    }
  }
  return (
    <>
      <hr />
      <h2 className="text-amber-950">Toggle Example:::</h2> <br />
      <button onClick={showAndHide}>{flag ? "Show" : "Hide"}</button>
      {flag && <p>Text is visible!</p>}
      <br />
      <br />
      <small>How do i Apply multiple condition...</small>
      <br />
      {count}
      <br />
      <h1>{getLabels(count)}</h1>
      <button onClick={callCounter}>Counter Master</button>
      <br />
      <br />
    </>
  );
}
export default Toggle;
