import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function MyInutRef() {
  const { user, setUser } = useContext(UserContext);
  const inputRef = useRef(null);
  const getInputByRef = () => {
    const inputVal = inputRef.current.value;
    console.log(inputVal);
    console.log(inputRef);
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={getInputByRef}>Click=Ref</button>
      <br />
      <h1>{user}</h1>
      <button onClick={() => setUser("Kiddo")}>Comtext APi Call</button>
    </>
  );
}
