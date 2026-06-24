import React, { useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch/UseFetch";
export default function ProgressBar() {
    const [progress, setProgress] = useState(10);
    const { data, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/todos"
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev + 10;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const showData = !loading && progress === 100;

    return (
        <>
            <div style={{ margin: "3% 0" }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: "5px",
                        backgroundColor: "blue",
                        transition: "width 0.3s ease"
                    }}
                />
                <small>{progress}%</small>
            </div>

            {showData ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}