import { useEffect, useState } from "react";
import "./App.css";
import Child from "./component/Child";

function App() {
  const [aadhar, setAadhar] = useState("1234567890123");
  useEffect(() => {
    const maskedAadhar = aadhar.slice(0, aadhar.length - 7) + "*".repeat(7); // Masking the last 7 digits
    setAadhar(maskedAadhar);
    const spilitChar = maskedAadhar.split("");
    for (let i = spilitChar.length - 7; i < spilitChar.length; i++) {
      spilitChar[i] = "*"; // Replacing the last 7 characters with '*'
    }
    console.log("Masked Aadhar 2nd Approach:", spilitChar.join(""));
  }, [aadhar]);
  return (
    <>
      {aadhar && <div>Aadhar: {aadhar}</div>}

      <Child aadhar={aadhar} />
    </>
  );
}

export default App;
