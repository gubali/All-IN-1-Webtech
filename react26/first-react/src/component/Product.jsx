import { useState } from "react";

function Product({ user, title = "khan", children, color = "blue" }) {
  const [myProps, setMyProps] = useState(title);
  const [getInputVal, setInputVal] = useState("");
  function updateProps() {
    setMyProps("AI Engineer");
  }

  function getTextBoxVal(event) {
    const val = event.target.value;
    setInputVal(val);
  }
  return (
    <>
      Textbox val: {getInputVal}
      <input onBlur={getTextBoxVal} type="text" placeholder="Get input value" />
      <button onClick={() => setInputVal("")}>Clear</button>
      <br />
      <br />
      <h1 style={{ color: color }}>Example on Props::{title}</h1>
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} - {item.role}
          </li>
        ))}
      </ul>
      <br /> <br />
      {children}
      <br />
      <small>Update props on button!</small>
      <h1>{myProps}</h1>
      <button onClick={updateProps}>Update Props</button>
    </>
  );
}
export default Product;
