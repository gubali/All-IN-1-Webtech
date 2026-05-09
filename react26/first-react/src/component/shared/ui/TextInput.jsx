import { forwardRef, useImperativeHandle, useRef } from "react";
function TextInput(props, ref) {
    return <input className="w-full px-3 py-2 border border-gray-300 rounded-md" ref={ref} {...props} />
};

function UseImperativeHandle(props, ref) {
    const innerRef = useRef();
    useImperativeHandle(ref, () => ({
        focusInput() {
            innerRef.current.focus();
        },
        clearInput() {
            innerRef.current.value = ""
        }
    }))
    return <input className="w-full px-3 py-2 border border-gray-300 rounded-md" ref={ref} {...props} />
};
export default forwardRef(TextInput, UseImperativeHandle)