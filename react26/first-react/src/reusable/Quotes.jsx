import React from 'react'
export default function Quotes({ heading, para }) {
    return (
        <>
            <div className="flex items-center justify-center min-h-[160px]">
                <div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 animate-bounce">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <strong>{heading}: </strong>
                        {para}
                    </p>
                </div>
            </div>
        </>
    )
}
