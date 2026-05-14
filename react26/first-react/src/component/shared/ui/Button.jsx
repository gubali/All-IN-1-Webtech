import React from 'react'

export default function Button({ ...props }) {
    return (
        <>
            <button {...props}></button>
            {/* <button onClick={onClick} type={type} className={className} name={name}>{children ?? label}</button> */}
        </>
    )
}
