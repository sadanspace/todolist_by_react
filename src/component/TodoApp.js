import Create from './Create';
import Todo from './Todo';
import Filter from './Filter';
import React from "react";
import {observer} from 'mobx-react';


@observer
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCheckedChange = this.handleCheckedChange.bind(this)
    this.handleCondChange = this.handleCondChange.bind(this)
  }

  handleCreate(event) {
    const { service } = this.props

    service.create(event.target.value);
  }

  handleCheckedChange(event, key) {
    const { service } = this.props

    service.setTodoState(event.target.checked, key);
  }

  handleCondChange(value) {
    const { service } = this.props

    service.setFilterState(value);
  }

  render() {
    const { service } = this.props

    return (
        <div>
            <Create _={service.changed} onCreate={this.handleCreate} />
            <Filter onFilter={this.handleCondChange}/>
            {
              service.todos.map(item => (
                  <Todo key={item.key} todo={item} onChange={this.handleCheckedChange} />
              ))
            }
        </div>
    );
  }
}

export default Root
