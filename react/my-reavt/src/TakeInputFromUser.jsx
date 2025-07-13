import React, { useState,useRef } from "react";

const TodoApp = () => {
  const [inputValues, setInputValues] = useState("");
  const inpurRef = useRef(null);
  const insertValues = (e) => {
    e.preventDefault();
    const trimVal = inputValues.trim();
    console.log( trimVal);
    setInputValues("");
    inpurRef.current.focus();
  };
  return (
    <>
      <h1>Local Data :: My Todo App</h1>
      <form onSubmit={insertValues}>
        <input
          type="text"
          value={inputValues}
          ref={inpurRef}
          autofocus
          onChange={(e) => setInputValues(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      ;
    </>
  );
};

export default TodoApp;
