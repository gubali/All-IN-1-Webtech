import { useRef } from "react";

export default function UnControlledComponent({ parentCall }) {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const handleForm = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passRef.current.value;
    // const user = document.querySelector("#user").value;
    // const password = document.querySelector("#password").value;
    console.log(user, password);
  };

  return (
    <>
      <h1>UnControlled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" ref={userRef} placeholder="name..." id="user" />
        <input
          type="password"
          ref={passRef}
          id="password"
          placeholder="password..."
        />
        <button>Submit</button>
      </form>
      <button onClick={parentCall}>Call Parent function on Child Button</button>
    </>
  );
}
