import React from 'react'

export default function Card({title,id,body}) {
    return (
        <div className="post card" key={id}>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{body}</p>
            </div>
        </div>
    )
}
