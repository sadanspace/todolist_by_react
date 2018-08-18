import React from "react";
import ReactDom from "react-dom";
import Create from './Create';


class Root extends React.Component {
  render() {
    return <div>
      <Create />
    </div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
