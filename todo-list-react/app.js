console.log('inside App.js')
window.React = require('../node_modules/react/umd/react.development')
window.ReactDOM = require('../node_modules/react-dom/cjs/react-dom.development')
console.log(window.React)
// const { Component } = window.React;
// const { render } = window.ReactDOM;
console.log('inside App.js')
class App extends window.React.Component {
    render() {
        console.log('inside render')
        return (
            <div>
                <h3>My React Component</h3>
            </div>
        )
    }
}

window.ReactDOM.render(<App />, document.getElementById('root'))