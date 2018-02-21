import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.jsx';
import axios from 'axios';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Input />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
