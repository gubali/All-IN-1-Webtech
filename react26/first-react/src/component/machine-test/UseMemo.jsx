import React, { useMemo, useState } from 'react';
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
import { initialItems } from '../../reusable/utils/Utils'
export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);
    const selectedItem = useMemo(() =>
        items.find((item) => item.id === count), [count, items]);
    const incriment = () => {
        setCount(prev => prev + 1)
    };
    return (
        <>
            <div class="flex items-center justify-center min-h-[160px]">
                <div class="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p class="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseMemo</strong> Cache a computed value during render to avoid re-computation.
                    </p>
                </div>
            </div>
            <div className='px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 '>
                <h4>{count}</h4><br />
                <h3>Seleted id: {selectedItem?.id}</h3>
                <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`}
                    onClick={incriment}>
                    +
                </Button>
            </div>
        </>
    )
}
