import React, { useCallback, useState } from 'react';
import Button from '../shared/ui/Button';
import styles from "../../style/ui.module.css";
import SearchInput from '../common/searchInput/SearchInput';
export default function UseCallBack() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0)
    const allUsers = [
        'john',
        'alex',
        'george',
        'simon',
        'james']
    const [users, setUsers] = useState(allUsers);
    const handleSearchQuery = useCallback((value) => {
        console.log(users[0]);
        const filterUser = allUsers.filter((user) => user.toLowerCase().includes(value.toLowerCase()))
        setUsers(filterUser);
        setSearch(value)
    }, [users])
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseCallback: </strong>
                        Referential stability tool: To keep function identity stable across renders so React can avoid unnecessary
                        work in child components and effects. <br />
                        <strong>React.memo /memo: </strong>
                        Only re-render this component if its props change.
                    </p>
                </div>
            </div>

            Search Key: {search}
            <div className='px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 '>
                <small className="block mt-2 text-xs text-zinc-500 italic">
                    Temporary state added to inspect child re-render behavior.
                </small>
                <strong>{count}</strong><br />
                <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`}
                    onClick={() => setCount(prev => prev + 1)}>
                    +
                </Button><br /> <br />
                <SearchInput type={"text"} onChange={handleSearchQuery} />
                <ul>
                    {
                        users.length > 0 ? (
                            users.map((user) => (
                                <li key={user}>{user}</li>
                            ))
                        )
                            :
                            (<li>no data</li>)
                    }
                </ul>
            </div>
        </>
    )
}
