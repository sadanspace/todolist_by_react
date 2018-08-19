import React from "react";
import ReactDom from "react-dom";
import Create from './Create';
import TodoService from './service';


class Root extends React.Component {
  constructor (props) {
    super(props);
    this.service = new TodoService();
  }

  handleCreate(event) {
    this.service.create(event.target.value);
  }

  render() {
    return <div>
      <Create onCreate={this.handleCreate.bind(this)}/>
    </div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
