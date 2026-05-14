import { forwardRef, useImperativeHandle, useRef } from "react";
const TextInput = forwardRef((props, ref) => {
    const innerRef = useRef();

    useImperativeHandle(ref, () => ({
        focusInput() {
            innerRef.current.focus();
        },
        clearInput() {
            innerRef.current.value = "";
        }
    }));
    return (
        <input
            ref={innerRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...props}
        />
    );
});

export default TextInput;