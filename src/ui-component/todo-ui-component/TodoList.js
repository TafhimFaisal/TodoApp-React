import React from 'react';
import CollectionItem from './CollectionItem'

export default function TodoList(props) {

    let todos = props.todos.length > 0 
    ? props.todos.map( (todo,index) => {
        return  <CollectionItem todo = {todo} delete = {props.delete} key={todo.id}/>
    }) : <div className="center collection-item"> no todo left </div>

    return (
        <div className="collection">
            {todos}
        </div>
    )
}
