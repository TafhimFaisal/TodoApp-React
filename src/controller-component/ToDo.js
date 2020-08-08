import React, { Component } from 'react'
import TodoList from './../ui-component/todo-ui-component/TodoList'
import TodoHeader from './../ui-component/todo-ui-component/TodoHeader'
import AddTodoForm from './../ui-component/todo-ui-component/AddTodoForm'

export default class ToDo extends Component {

    state = {
        todos : [
            {name:'go shopping 1',id:1},
            {name:'go shopping 2',id:2},
            {name:'go shopping 3',id:3}
        ]
    }
    
    DeleteTodo = (id) => {

        let newTodoList = this.state.todos.filter( 
            (todo) => id !== todo.id 
        )
       
        this.setState({
            todos : newTodoList
        })
        
    }

    AddTodo = (e) => {
        e.preventDefault();
        if( e.target.elements[0].value.length > 0 ){
            let newTodo = {
                name : e.target.elements[0].value,
                id : this.state.todos.length + 1
            }
            let todos = [ ...this.state.todos,newTodo ];
            this.setState({todos})
            e.target.reset();
        }
    }

    render() {
        return (

            <div>
                <div className="container">
                    <TodoHeader header = { "ToDo's List" }/>
                    <AddTodoForm addTodo = {this.AddTodo}/>
                    <TodoList todos = {this.state.todos} delete = {this.DeleteTodo} />    
                </div>
            </div>
        )
    }
}
