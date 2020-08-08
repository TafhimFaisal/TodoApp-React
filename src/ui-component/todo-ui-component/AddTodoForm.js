import React from 'react'

export default function AddTodoForm(props) {
    return (
        <form onSubmit={(e)=>{props.addTodo(e)}}>
            <input type="text" id="addTodo" placeholder="Add Todo"/>
        </form>
    )
}
