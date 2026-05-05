import { forwardRef, useImperativeHandle } from "react";

const ParenAndChild = forwardRef((props, ref) => {
  const childCall = () => {
    alert("Child function Called");
  };

  useImperativeHandle(ref, () => ({
    childCall,
  }));

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <button onClick={props.FnFromParent}>Call Function from parent</button>
    </div>
  );
});
export default ParenAndChild;
