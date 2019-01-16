console.log('inside App.js')
import React, { Component } from 'react'
import ReactDOM from "react-dom";
console.log('inside App.js')
class App extends Component {
    render() {
        console.log('inside render')
        return (
            <div>
                <h3>My React Component</h3>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))