import React, { Component } from "react"
import Header from "./components/layout/Header"
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import uuid from "react-uuid"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    id: uuid(),
                    title: "Take out the trash",
                    completed: false,
                },
                {
                    id: uuid(),
                    title: "Dinner with wife",
                    completed: false,
                },
                {
                    id: uuid(),
                    title: "Meeting with boss",
                    completed: false,
                },
            ],
        }
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }),
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false,
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                    />
                </div>
            </div>
        )
    }
}

export default App
