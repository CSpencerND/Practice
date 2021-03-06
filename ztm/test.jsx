import React from 'react'
import ReactDOM from 'react-dom'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: 'swordfish',
            authorized: false,
        }
        this.authorize = this.authorize.bind(this)
    }

    authorize(e) {
        const password = e.target.querySelector('input[type="password"]').value
        const auth = password == this.state.password
        this.setState({
            authorized: auth,
        })
    }

    render() {
        const login = (
            <form action="#">
                <input type="password" placeholder="Password" />
                <input type="submit" />
            </form>
        )

        return (
            <div id="authorization">
                <h1>{this.state.authorized ? 'Contact' : 'Enter Password'}</h1>
                <ul>
                    <li>client@example.com</li>
                    <li>555.555.5555</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Contact />, document.getElementById('app'))
