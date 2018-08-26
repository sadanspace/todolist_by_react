import Create from './Create';
import Todo from './Todo';
import Filter from './Filter';
import React from "react";
import {observer} from 'mobx-react';


@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate(event) {
    this.props.service.create(event.target.value);
  }

  handleCheckedChange(event, key) {
    this.props.service.setTodoState(event.target.checked, key);
  }

  handleCondChange(value) {
    this.props.service.setFilterState(value);
  }

  render() {
    return <div>
      <Create _={this.props.service.changed} onCreate={this.handleCreate.bind(this)} />
      <Filter onFilter={this.handleCondChange.bind(this)}/>
      {this.props.service.todos.
      map(item => <Todo key={item.key} todo={item} onChange={this.handleCheckedChange.bind(this)} />)}
    </div>;
  }
}