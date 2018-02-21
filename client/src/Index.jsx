import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {

  getLastFiveTransInfo() {
    this.getTransactions();
  }

  getTransactions() {
    const address = '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a';
    const hashes = [];

    axios({
      method: 'post',
      url: '/transactions',
      data: { address: address }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    return (
      <div>
        <h1 onClick={this.getLastFiveTransInfo.bind(this)}>Hello world!</h1>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
