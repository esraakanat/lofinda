import React from 'react'

export default function Container({ children }) {
    return (
        <div className="wrap container mx-auto px-4">
            {children}
        </div>
    )
}
