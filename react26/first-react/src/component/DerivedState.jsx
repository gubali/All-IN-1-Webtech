import { useState } from "react";

export default function DerivedState() {
  let [userName, setUserName] = useState("");
  let [userList, setUserList] = useState([]);
  const handleInput = (e) => {
    const val = e.target.value;
    setUserName(val);
  };
  const addUserToList = () => {
    setUserList([...userList, userName]);
    setUserName("");
  };
  const arrayCount = userList.length;
  const last = userList[userList.length - 1];
  const unique = [...new Set(userList)].length;
  return (
    <>
      <h3>Derived State</h3>
      Total count is : {arrayCount}
      <p>Last: {last}</p>
      <p>Unique{unique}</p>
      <br />
      <input type="text" value={userName} onChange={handleInput} />
      <br />
      <br />
      <button onClick={addUserToList}>Add to list</button>
      <br />
      {userList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}
