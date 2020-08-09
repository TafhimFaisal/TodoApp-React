import React from 'react'

export default function Card({weather}) {
    return (
        <div className="post card">
            <div className="card-content">
                <span className="card-title">{weather}</span>
                <p></p>
            </div>
        </div>
    )
}
