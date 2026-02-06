import React, { useState } from "react";
import { default as TabButton } from "./TabButton";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import MyButton from "./MyButton.jsx";
import Tab from "./Tab.jsx";
export default function Example() {
  const [selectedTopics, setSelectTecTopics] = useState("components");
  let [userInput, setUserInput] = useState("");
  let tabContent;
  //= <p>Please select a topic</p>;
  function handleEvent(elem) {
    setSelectTecTopics(elem);
  }

  if (selectedTopics) {
    tabContent = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedTopics]?.title}</h2>
        <p>{EXAMPLES[selectedTopics]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopics]?.code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section title={"Example component"} id={"example-component"}>
        {/* <menu> */}
          <Tab buttons={
            <menu>
            <h1>Welcome props like JSX</h1>
          <TabButton
            isSelected={selectedTopics === "components"}
            label="components"
            OnSelect={() => handleEvent("components")}
            style={{ color: "red" }}
          ></TabButton>
          <TabButton
            isSelected={selectedTopics === "jsx"}
            label="jsx"
            OnSelect={() => handleEvent("jsx")}
          ></TabButton>
          <TabButton
            isSelected={selectedTopics === "props"}
            label="props"
            OnSelect={() => handleEvent("props")}
          ></TabButton>
          <TabButton
            isSelected={selectedTopics === "state"}
            label="state"
            OnSelect={() => handleEvent("state")}
          ></TabButton>
          </menu>
          }>
          </Tab>
        {/* </menu> */}
        {tabContent}
            < hr />
        <h2>Re-Usable button</h2>
        <MyButton MyContainer="section" label="Login" myclasName="btn-primary" />
        <MyButton MyContainer="ul" label="Register" myclasName="btn-danger" />
      </Section>
    </>
  );
}
