import React, { Component } from "react"
import PropTypes from "prop-types"

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f2f2f2",
            padding: "10px",
            fontSize: "2rem",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        }
    }

    render() {
        const { title, id } = this.props.todo

        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    />{" "}
                    {title}
                    <button
                        onClick={this.props.delTodo.bind(this, id)}
                        style={btnStyle}
                    >
                        X
                    </button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
}

const btnStyle = {
    background: "#ff5555",
    color: "#f2f2e8",
    border: "none",
    padding: "2.5px 7.5px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
}

export default TodoItem
