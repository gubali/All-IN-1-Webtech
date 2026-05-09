import React, { useEffect, useRef, useState } from 'react'
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [countList, setCountList] = useState([]);
    const countRef = useRef(0)
    const incriment = () => {
        setCount((prev) => Math.min(prev + 1, 15));
        setCountList((prev) => [...prev, count]);
        countRef.current++;
        console.log("State", count);
        console.log("useRef", countRef.current);

    };

    const decriment = () => {
        setCount((prev) => Math.max(prev - 1, 0));
        setCountList((prev) => prev.slice(0, -1));
    };
    useEffect(() => {
        localStorage.setItem("count history", JSON.stringify(countList));
    }, [countList])
    // useRef example
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>useState: </strong>
                        useState is a React Hook to store and update component state, triggering re-render on change.
                        <br />
                        <strong>useRef: </strong>
                        useRef is a React Hook that lets you keep a value without re-rendering the page, and also helps you directly access HTML elements like input
                    </p>
                </div>
            </div>
            <div className={styles.page}>
                {/* Counter */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Counter App - (useState +useRef)
                    </h1>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='useRef....' ref={inputRef} />
                    <div className={styles.counter}>{count}</div>

                    <div className={styles.btnGroup}>
                        <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`}
                            onClick={incriment}>
                            +
                        </Button>
                        <Button label={"re-usable button"} className={`${styles.btn} ${styles.red}`}
                            onClick={decriment}>
                            -
                        </Button>
                    </div>

                    <h3 className={styles.listTitle}>Counter History</h3>

                    <div className={styles.listBox}>
                        {countList.length > 0 ? (
                            countList.map((item, index) => (
                                <div key={index} className={styles.listItem}>
                                    Value: {item}
                                </div>
                            ))
                        ) : (
                            <p className={styles.empty}>No history yet</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
