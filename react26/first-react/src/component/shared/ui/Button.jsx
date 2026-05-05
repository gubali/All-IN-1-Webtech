import React from 'react'

export default function Button({ label, onClick, className, children }) {
    return (
        <>
            <button onClick={onClick} className={className}>{children ?? label}</button>
        </>
    )
}
