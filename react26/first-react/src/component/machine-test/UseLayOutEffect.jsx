import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
//import styles from "../../style/ui.module.css";
export default function UseLayOutEffect() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [type, setType] = useState("layout"); // layout | effect
    const [big, setBig] = useState(false);

    const measure = () => {
        setWidth(ref.current.offsetWidth);
    };

    // runs BEFORE paint
    useLayoutEffect(() => {
        console.log("useLAyout");
        if (type === "layout") measure();
    }, [big, type]);

    // runs AFTER paint
    useEffect(() => {
        console.log("effect");
        if (type === "effect") measure();
    }, [big, type]);
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseLayoutEffect: </strong>
                        useLayoutEffect runs before browser paint, while useEffect runs after paint.
                    </p>
                </div>
            </div>
            <br />
            {/* user list without useTransition */}
            <div>
                <button onClick={() => setType("layout")}>useLayoutEffect</button><br />
                <button onClick={() => setType("effect")}>useEffect</button><br />
                <button onClick={() => setBig(b => !b)}>Toggle</button>

                <div
                    ref={ref}
                    style={{
                        width: big ? 300 : 150,
                        height: 80,
                        background: "#ddd",
                        marginTop: 20
                    }}
                >
                    Width: {width}px
                </div>
            </div>

        </>
    )
}
