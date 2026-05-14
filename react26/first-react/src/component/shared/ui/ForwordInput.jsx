import { forwardRef } from "react";
function ForwordInput(props, ref) {
    return <input className="w-full px-3 py-2 border border-gray-300 rounded-md" ref={ref} {...props} />
};
export default forwardRef(ForwordInput)