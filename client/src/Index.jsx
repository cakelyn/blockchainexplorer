import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
