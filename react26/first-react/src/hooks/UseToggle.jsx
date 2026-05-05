import React, { useState } from "react";
const useToggle = (defaultVal) => {
  const [value, setValue] = useState(defaultVal);
  const toggle = (val) => {
    typeof val === "boolean" ? setValue(val) : setValue((val) => !val);
  };
  return [value, toggle];
};

export default useToggle;
