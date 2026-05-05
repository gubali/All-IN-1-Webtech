import React, { useId } from "react";
import { useActionState } from "react";
export default function UseAction() {
  const myAge = useId();
  const handleSubmit = async (prevData = {}, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    name = name?.trim();
    password = password?.trim();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!name || !password) {
      alert("required");
      return prevData;
    }
    // } else {
    //   return { error: "failed" };
    // }
    return {
      ...prevData,
      name,
      password,
    };
  };
  const [state, action, isPending] = useActionState(handleSubmit, {});
  return (
    <>
      <h1>---Use Action Hook----</h1>
      <form action={action}>
        <input defaultValue={state?.name} type="text" name="name" />
        <br />
        <input defaultValue={state?.password} type="password" name="password" />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ? "Saving...." : "Submit"}
        </button>
        {state && (
          <p>
            Name:{state?.name}
            <br />
            Password: {state?.password}
          </p>
        )}
      </form>
      <br />
      useId generate random Id: {myAge}
    </>
  );
}
