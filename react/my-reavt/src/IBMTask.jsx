import React, { useEffect, useRef, useState } from 'react';

const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const checkboxesRef = useRef({});

  // Load items from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    setItems(saved);
  }, []);

  // Save items to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newItem = { id: Date.now(), text: trimmed };
    setItems((prev) => [...prev, newItem]);
    setInputValue('');
    inputRef.current.focus();
  };

  const handleRemoveItem = (id) => {
    const index = items.findIndex(item => item.id === id);
    const nextItems = [...items];
    nextItems.splice(index, 1);
    setItems(nextItems);

    setTimeout(() => {
      const keys = Object.keys(checkboxesRef.current);
      if (keys.length === 0) {
        inputRef.current.focus();
      } else {
        if (checkboxesRef.current[items[index]?.id]) {
          checkboxesRef.current[items[index]?.id].focus();
        } else if (checkboxesRef.current[items[index - 1]?.id]) {
          checkboxesRef.current[items[index - 1]?.id].focus();
        } else {
          inputRef.current.focus();
        }
      }
    }, 0);
  };

  return (
    <main>
      <h1>Todo List</h1>
      <form onSubmit={handleAddItem}>
        <label htmlFor="todo-input">Add a new todo:</label>
        <input
          id="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          autoFocus
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                ref={(el) => (checkboxesRef.current[item.id] = el)}
                onChange={() => handleRemoveItem(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TodoApp;
