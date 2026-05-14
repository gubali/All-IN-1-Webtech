import React, { useEffect, useDeferredValue, useMemo, useState, useTransition } from 'react';
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
import generateUsers from '../../reusable/utils/ListUtils';
export default function UseTransition() {
    const [query, setQuery] = useState("Test");
    const [filteredQuery, setFilterQuery] = useState("");
    const [isLoading, startTransition] = useTransition();
    const deferedQuery = useDeferredValue(query)
    const userList = useMemo(() => generateUsers(1000), []);
    const handleSearch = (e) => {
        const val = e.target.value;
        setQuery(val);
        startTransition(() => {
            setFilterQuery(val)
        })
    }
    const filterList = userList.filter((user) => user.name.toLowerCase().includes(filteredQuery.toLowerCase()))
    // handled ghost listener
    const ghostListenerOrMemeoryLeak = () => {
        console.log("========Scroll===================");
    }
    //use effect
    useEffect(() => {
        // console.log("Query: ", query);
        // console.log("Defered query: ", deferedQuery);
        // console.log("=======End query========");
        // console.log("lsitener added");
        window.addEventListener('scroll', ghostListenerOrMemeoryLeak);
        // () => {
        //     console.log("lsitener remove");
        //     window.removeEventListener('scroll', ghostListenerOrMemeoryLeak)
        // }
    }, [query, deferedQuery])
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseTransition: </strong>
                        useTransition is a React Hook that helps keep your UI responsive while performing non-urgent updates.<br />
                        <strong>const [isPending, startTransition:wraps low-priority updates] = useTransition();</strong><br />
                        <br />
                        <strong>UseDeferredValue: </strong>
                        useDeferredValue lets React delay expensive UI updates so the application stays responsive.

                    </p>
                </div>
            </div>
            {/* use state Todo */}
            <div className={styles.page}>
                {/* user list without useTransition */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        User List
                    </h1>
                    <input type='text' value={query} onChange={handleSearch} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='filter...' />
                    {isLoading && <p>Loading...</p>}
                    <div className={styles.listBox}>
                        {filterList.length > 0 ? (
                            filterList.map((item) => (
                                <div key={item.id} className={styles.listItem}>{item.name}</div>

                            ))
                        ) : (<p>No Data...</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}
