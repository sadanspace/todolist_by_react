import Create from './Create';
import Todo from './Todo';
import Filter from './Filter';
import React from "react";
import {observer} from 'mobx-react';


@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'uncompleted'};
  }

  handleCreate(event) {
    this.props.service.create(event.target.value);
  }

  handleCheckedChange(event, key) {
    this.props.service.setTodoState(event.target.checked, key);
  }

  handleCondChange(value) {
    this.setState({filter: value})
  }

  render() {
    return <div>
      <Create onCreate={this.handleCreate.bind(this)} />
      <Filter onFilter={this.handleCondChange.bind(this)}/>
      {[...this.props.service.todos.values()].filter( item => {
        return (this.state.filter === "all") || 
        (this.state.filter === 'completed' && item.completed === true) ||  
        (this.state.filter === 'uncompleted' && item.completed === false) ? true : false;
      }).
      map(item => <Todo key={item.key} todo={item} onChange={this.handleCheckedChange.bind(this)} />)}
    </div>;
  }
}