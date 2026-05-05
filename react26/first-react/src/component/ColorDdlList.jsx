import { useState } from "react";
import ClockTimer from "./ClockTimer";
export default function ColorDdlList() {
  const [color, setColor] = useState("green");
  const [ddlStyle, setDdlStyle] = useState({
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "24px",
    backgroundColor: "#fff",
    cursor: "pointer",
    color: "green",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='20'><path d='M7 10l5 5 5-5z'/></svg>\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "16px",
  });
  const updatedTheme = (event) => {
    let valText = event.target.value;
    setColor(valText);
    setDdlStyle({ ...ddlStyle, color: valText });
  };
  return (
    <>
      <select
        style={ddlStyle}
        onChange={updatedTheme}
        defaultValue="green"
        value={color}
      >
        <option value={"green"}>Green</option>
        <option value={"cyan"}>cyan</option>
        <option value={"purple"}>Purple</option>
      </select>
      <ClockTimer color={color} />
    </>
  );
}
