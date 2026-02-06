import { useState } from "react";

function MyUseState() {
  const [counter, setCounter] = useState(15);
  const addCounterValue = () => {
    console.log("Counter value added" + Math.random() * 2);
    //const newCounterValue = counter + 1;
    // if (newCounterValue > 21) {
    //   alert("Counter value cannot be more than 21");
    //   return;
    // }
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
  };
  const removeCounterValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h2>My Counter: {counter}</h2>
      <button onClick={addCounterValue}>Add</button>
      <button onClick={removeCounterValue}>Remove</button>
      <p>!!: {counter}</p>
    </>
  );
}
export default MyUseState;
