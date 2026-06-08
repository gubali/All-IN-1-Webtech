import React, { useState, useEffect } from "react"
import useFetch from "../hooks/UseFetch/UseFetch";
export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos")
    useEffect(() => {
        if (progress > 100) return;
        const timeInterval = setInterval(() => {
            setProgress(prev => Math.min(prev + 10, 100));
        }, 1000);
        return () => clearInterval(timeInterval)
    }, [])
    return (
        <>
            <div style={{ margin: '3% 0' }}>
                <div style={{ width: `${progress}%`, height: "5px", backgroundColor: "blue" }}></div>
                <small style={{ margin: '3px 0' }}> {`${progress}%`}</small>
            </div>
            <br />
            {loading ? (<p>Loading...</p>) : (<pre>{JSON.stringify(data, null, 2)}</pre>)}
        </>
    )
} 