import { useState, useTransition } from "react";
import FormSubmitButton from "../component/FormSubmitButton";
export default function UseFormSubmission() {
  const handleSubmit = async (formData) => {
    const data = {
      fName: formData.get("fName"),
      pass: formData.get("pass"),
    };
    console.log("formData", data);
  };
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleTextChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setText(value);
    startTransition(() => {
      /*eslint no-undef: "error"*/
      const rslt = Array(10)
        .fill(value)
        .map((v, i) => v + "**" + i);
      setList(rslt);
    });
  };
  return (
    <>
      <div style={{ border: "3px solid yellow", padding: "10px" }}>
        <h1>Form Submission - useFormStatus</h1>
        <form action={handleSubmit}>
          <input type="text" name="fName" />
          <br />
          <input type="password" name="pass" />
          <br />
          <FormSubmitButton />
        </form>
        <br />
        <strong>UseTransition image loader</strong>
        <input type="text" value={text} onChange={handleTextChange} />
        {isPending && (
          <img
            src="https://i.gifer.com/ZZ5H.gif"
            alt="loading..."
            width="60"
            height="60"
          />
        )}
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
