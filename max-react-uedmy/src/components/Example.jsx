export { TabButton } from "./TabButton.jsx";

export default function Example() {
  const [selectedTopics, setSelectTecTopics] = useState("components");
  let [userInput, setUserInput] = useState("");
  let tabContent = <p>Please select a topic</p>;
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
      <h2>Time to get started!</h2>
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
      {/* <h5>Dynamic Conent Pressed {selectedTopics}</h5> udefines*/}
      {/* {!selectedTopics ? { tabContent } : null} */}
      {tabContent}
    </>
  );
}
