import React, { useActionState } from 'react'
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
import Input from '../shared/ui/Input';
import { applyCoupan } from '../../component/machine-test/action/CouponAction';
export default function UseActionState() {
    const initialState = {
        success: false,
        message: ""
    }
    const [state, formAction, isPending] = useActionState(applyCoupan, initialState);
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>UseSatate: </strong>
                        useState is a React hook used for managing simple, independent state values inside a component.
                        <strong>const [count, setCount] = useState(0);</strong><br />
                    </p>
                </div>
            </div>
            <br />
            <div className={styles.page}>
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        Use Action State App
                    </h1>
                    <form action={formAction}>
                        <Input type={'text'} name="coupon" className={'w-full px-3 py-2 border border-gray-300 rounded-md'} placeholder={'Coupan...'} />
                        <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`} type={'submit'} disabled={isPending}>
                            {isPending ? "Applying..." : "Apply"}
                        </Button>

                    </form>
                    {state.message && (<p>{state.message}</p>)}
                </div>
            </div>
        </>
    )
}
