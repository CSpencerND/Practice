import React from "react"

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#f2f2e2",
    textAlign: "center",
    padding: "10px"
}

export default Header
