import React, { useState, useReducer } from 'react';
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
import { todoReducer } from "./TodoReducer"
export default function ToDoApp() {
    const [name, setName] = useState("");
    const [toDoList, setToDolIst] = useState([]);
    const handleInput = (e) => {
        setName(e.target.value)
    }
    const addItems = () => {
        setToDolIst([...toDoList, { id: Date.now(), text: name }])
        setName("")
    }
    const deleteItem = (id) => {
        // eslint-disable-next-line no-debugger
        debugger;
        setToDolIst(toDoList.filter((item) => item.id !== id));
    }
    // Using use reducer same Above 
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        r_input: ""
    });
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseSatate: </strong>
                        useState is a React hook used for managing simple, independent state values inside a component.
                        <strong>const [count, setCount] = useState(0);</strong><br />
                        <strong>Use Reducer </strong>
                        useReducer is a React hook used for managing complex state logic using actions and a reducer function.
                        <strong>
                            const [state, dispatch] = useReducer(reducer, initialState);<br />
                            dispatch({`type: "increment" `});
                        </strong>
                    </p>
                </div>
            </div>
            {/* use state Todo */}
            <div className={styles.page}>
                {/* Counter */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Todo App - (useState)
                    </h1>
                    <input value={name} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text" placeholder='name....' onChange={handleInput} />
                    <div className={styles.btnGroup}>
                        <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`} onClick={addItems}>
                            Add List
                        </Button>
                    </div>
                    <div className={styles.listBox}>
                        {toDoList.length > 0 ? (
                            toDoList.map((item, index) => (
                                <div key={index} className={styles.listItem}>
                                    Value: {item.text} &nbsp;
                                    id:{item.id}
                                    <button className={`${styles.btn} ${styles.red}`} onClick={() => deleteItem(item.id)}>X</button>
                                </div>
                            ))
                        )
                            : (
                                <p className={styles.empty}>No history yet</p>
                            )
                        }
                    </div>
                </div>
                {/* use Reducer */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Todo App - (useReducer)
                    </h1>
                    <input
                        value={state.r_input}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) =>
                            dispatch({
                                type: "set_input",
                                payload: e.target.value
                            })
                        }
                    />
                    <div className={styles.btnGroup}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "add",
                                    payload: state.r_input
                                });

                                dispatch({
                                    type: "clear_input"
                                });
                            }}
                        >
                            Add
                        </button>
                    </div>
                    <div className={styles.listBox}>
                        <ul>
                            {state.todos.map((todo) => (
                                <li key={todo.id}>
                                    {todo.text} - {todo.id}
                                    <button
                                        onClick={() =>
                                            dispatch({ type: "delete", payload: todo.id })
                                        }
                                    >
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
