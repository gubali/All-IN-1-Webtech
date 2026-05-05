import React, { useEffect, useState } from 'react'
import styles from "../../style/ui.module.css";
export default function Debounce() {
    const [search, setSearch] = useState("");
    const [debouceVal, setDebounce] = useState("");
    const handleQuery = (e) => {
        const val = e.target.value;
        setSearch(val);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);
    useEffect(() => {
        if (debouceVal) {
            console.log("Api call with: ", debouceVal);
        }
    }, [debouceVal]);
    return (
        <>
            <div className={styles.page}>
                {/* Debouce implimentation */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Debouce App -
                    </h1>
                    <input type=" text" onChange={handleQuery} value={search} /> <br />
                </div>
            </div>
        </>
    )
}
