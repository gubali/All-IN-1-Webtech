import React from "react";
export default React.memo(function ArrayList({ list }) {
  //console.log("Im re-usable list");
  return (
    <>
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
});
