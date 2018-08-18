import React from "react";
import ReactDom from "react-dom";


class Root extends React.Component {
  render() {
    return <div>
      <h1>first react element</h1>
    </div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
