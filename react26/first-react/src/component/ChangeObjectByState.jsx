import React, { useState } from "react";
import ArrayList from "../reusable/ArrayList";
export default React.memo(function ChangeObjectByState() {
  const [data, setData] = useState({
    name: "asif",
    address: {
      city: "Bengaluru",
      country: "India",
    },
  });
  const [skills, setSkills] = useState(["HTML", "Angular", "React"]);
  const setUserName = (e) => {
    const val = e.target.value;
    console.log(val);
    setData((prev) => ({
      ...prev,
      name: val,
    }));
  };
  const setCityName = (e) => {
    const val = e.target.value;
    console.log(val);
    setData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        city: val,
      },
    }));
    console.log(data);
  };
  const updateSkills = (e) => {
    const value = e.target.value;
    setSkills((prev) => [...prev.slice(0, -1), value]);
  };
  return (
    <>
      <input type="text" onChange={setUserName} placeholder="name..." />
      <input type="text" onChange={setCityName} placeholder="city..." />
      <br />
      Name: <h1>{data.name}</h1>
      City: <h1>{data.address.city}</h1>
      <br />
      <br />
      <h3>Update array</h3>
      <input type="text" onChange={updateSkills} placeholder="skills..." />
      <ArrayList list={skills} />
    </>
  );
});
