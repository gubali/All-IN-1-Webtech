import { useState } from "react";
function ToDo() {
  function name() {
    return "IPL";
  }
  const taskList = {
    name: "Asif",
    age: 30,
  };
  const [fruits, setfruits] = useState("Apple");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  //const [editText, setEditText] = useState("");
  const handleFruits = () => {
    setfruits("Banana");
  };
  //todo operations
  function addTaskToList() {
    if (!inputText.trim()) return;
    setTodos((prev) => [...prev, inputText]);
    setInputText("");
  }
  function deleteTask(indexToDelete) {
    const confirm = window.confirm(`Do you to want delete ${indexToDelete}`);
    if (!confirm) return;
    setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
  // update
  function updateList(index) {
    setEditIndex(editIndex === index ? null : index);
  }
  return (
    <>
      <h1>I'm Todo App</h1>
      <br />
      {name()}
      ------{taskList.name}
      <br />
      <h1>{fruits}</h1>
      <button onClick={handleFruits}>Change to Banana</button>
      <h3>ToDo Task List</h3>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Add Task"
      />
      <button onClick={addTaskToList}>Add task</button>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => updateList(index)}>
              {editIndex === index ? "Update" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ToDo;
