import React from 'react'

export default function CollectionItem(props) {
    return (
        <div className="center collection-item" key = {props.todo.id}>
            <span className="center" onClick={ ()=> { props.delete(props.todo.id) } }> {props.todo.name} </span>
        </div>
    )
}
