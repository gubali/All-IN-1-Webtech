import React, { useState } from 'react'
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [countList, setCountList] = useState([]);

    const incriment = () => {
        setCount((prev) => Math.min(prev + 1, 15));
        setCountList((prev) => [...prev, count]);
    };

    const decriment = () => {
        setCount((prev) => Math.max(prev - 1, 0));
        setCountList((prev) => prev.slice(0, -1));
    };
    return (
        <>
            <div className={styles.page}>
                {/* Counter */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Counter App
                    </h1>
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
