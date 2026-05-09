import React, { useRef } from 'react'
import Quotes from '../../reusable/Quotes';
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
import { TextInput, UseImperativeHandle } from '../shared/ui/TextInput'
export default function UseRef() {
    const heading = 'UseRef';
    const desc = 'testing';
    //useref
    const inputRef = useRef(null);
    // ref - forwrd
    const forwrdInput = useRef(null)
    //UseImperativeHandle
    const imperativeHandle = useRef()
    const handleFocus = () => {
        console.log(inputRef);
        inputRef.current.focus();
    }

    return (
        <>
            <Quotes heading={`${heading}`} para={`${desc}`} />
            <br />
            <div className={styles.page}>
                {/* Counter */}
                <div className={styles.card}>
                    <h1 className={styles.title} style={{ textAlign: "center" }}>
                        UseRef+ForwardRef+userImpretiveHandle
                    </h1>
                    <small>Textbox coming re-usable elemnt and button click text box will be clear.</small> <br /><br />
                    <br />
                    <br />
                    <input className='w-full px-3 py-2 border border-gray-300 rounded-md'
                        type="text" placeholder='useRef....' ref={inputRef} />
                    <br />&nbsp;
                    <Button label={"re-usable button"}
                        className={`${styles.btn} ${styles.green}`} onClick={handleFocus}>
                        Focus
                    </Button>
                    <br /><br />
                    <TextInput ref={forwrdInput} placeholder="forward ref..." type="text" />
                    <br /><br />
                    <Button label={"re-usable button"}
                        className={`${styles.btn} ${styles.green}`}
                        onClick={() => {
                            forwrdInput.current.focus();
                            forwrdInput.current.value = "Data Engineer";
                            forwrdInput.current.style.color = "red"
                        }}>
                        Forword Ref
                    </Button>
                    <br /><br />
                    <TextInput ref={imperativeHandle} placeholder="useImperativeHandle..." type="text" />
                    <br /><br />
                    <Button label={"re-usable button"} onClick={() => {
                        imperativeHandle.current.focusInput();

                    }}
                        className={`${styles.btn} ${styles.green}`}>(Focus)Imperative Handle</Button>
                    <Button label={"re-usable button"} onClick={() => {
                        imperativeHandle.current.clearInput();

                    }}
                        className={`${styles.btn} ${styles.red}`}>(Clear)Imperative Handle</Button>
                </div>
            </div>
        </>
    )
}
