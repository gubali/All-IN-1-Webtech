import React from "react";
const Childmemo = React.memo((props) => {
  return (
    <>
      <strong>React.Memo and useCallback Example</strong>
      <br />
      <button onClick={props.handleClick}>{props.name}</button>
      <br />
      <strong>Coming through Context API</strong>
    </>
  );
});

export default Childmemo;
