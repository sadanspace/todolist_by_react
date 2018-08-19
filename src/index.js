import React from "react";
import ReactDom from "react-dom";
import Create from './Create';
import TodoService from './service';
import Todo from './Todo';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.service = new TodoService();
    this.state = { todos: this.service.todos };
  }

  handleCreate(event) {
    this.service.create(event.target.value);
    this.setState({ todos: this.service.todos });
  }

  handleCheckedChange(event, key) {
    this.service.setTodoState(event.target.checked, key);
  }

  render() {
    return <div>
      <Create onCreate={this.handleCreate.bind(this)} />
      {[...this.service.todos.values()].
        map(item => <Todo key={item.key} todo={item} onChange={this.handleCheckedChange.bind(this)} />)}
    </div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
