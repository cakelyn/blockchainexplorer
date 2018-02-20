import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {
  getLastFiveTransInfo() {
    this.getTransactions();
  }

  getTransactions() {
    const url = `https://api.blockcypher.com/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012`;
    const hashes = [];

    axios.get(url)
      .then((response) => {
        for (var i = 0; i < 5; i++) {
          hashes.push(response.data.txrefs[i].tx_hash);
        }
      })
      .catch((err) => {
        console.log(`Error: ${error}`);
      });

    console.log(hashes);
  }

  getTransactionInfo() {

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
