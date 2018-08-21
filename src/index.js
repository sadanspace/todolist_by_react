import React from "react";
import ReactDom from "react-dom";
import Create from './Create';
import TodoService from './service';
import Todo from './Todo';
import Filter from './Filter';



class Root extends React.Component {
  constructor(props) {
    super(props);
    this.service = new TodoService();
    this.state = { todos: this.service.todos , filter: 'completed'};
  }

  handleCreate(event) {
    this.service.create(event.target.value);
    this.setState({ todos: this.service.todos });
  }

  handleCheckedChange(event, key) {
    this.service.setTodoState(event.target.checked, key);
    this.setState({ todos: this.service.todos });
  }

  handleCondChange(value) {
    this.setState({filter: value})
  }

  render() {
    return <div>
      <Create onCreate={this.handleCreate.bind(this)} />
      <Filter onFilter={this.handleCondChange.bind(this)}/>
      {[...this.service.todos.values()].filter( item => {
        if (this.state.filter === "all")
          return true;
        else if (this.state.filter === 'completed')
          if (item.completed === true) 
            return true;
          else 
            return false;
        else if (this.state.filter === 'uncompleted')
          if (item.completed === false) 
            return true;
          else 
            return false;
      }
      ).
      map(item => <Todo key={item.key} todo={item} onChange={this.handleCheckedChange.bind(this)} />)}
    </div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
