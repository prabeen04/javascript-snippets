import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import "./styles.css";

class App extends React.Component {
  state = {
    todo: "",
    todos: []
  };
  handleChange = ({ target: { value } }) => this.setState({ todo: value });
  handleSubmit = todo =>
    this.setState({
      todos: [...this.state.todos, { title: todo, isDone: false }],
      todo: ""
    });
  markAsDone = index => {
    const newTodos = [...this.state.todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    this.setState({ todos: newTodos });
  };
  render() {
    const { todo, todos } = this.state;
    const todoLength = todos.length;
    const incompleteTodos = todos && todos.filter(todo => !todo.isDone).length;

    return (
      <>
        <div className="App">
          <input value={todo} onChange={this.handleChange} />
          <button onClick={() => this.handleSubmit(todo)} disabled={!todo}>
            Add
          </button>
          <h2>{`${incompleteTodos} task remaining out of ${todoLength}`}</h2>
          <ul>
            {todos &&
              todos.map((todo, i) => {
                const isDone = cx({ "is-done": todo.isDone });
                return (
                  <li
                    key={i}
                    className={isDone}
                    onClick={() => this.markAsDone(i)}
                    style={{
                      textDecoration: todo.isDone ? "line-through" : ""
                    }}
                  >
                    {todo.title}
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
