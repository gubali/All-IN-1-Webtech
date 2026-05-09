import React from 'react'

function SearchInput({ value, onChange, type }) {
    console.log("=====serach rendered==========");

    return (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
            className='px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500' />
    )
}
export default React.memo(SearchInput);
