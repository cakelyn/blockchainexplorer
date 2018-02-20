import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      hashes: []
    }
  }

  getLastFiveTransInfo() {
    this.getTransactions();
  }

  getTransactions() {
    const url = `https://api.blockcypher.com/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012`;
    const hashes = [];

    axios.get(url)
      .then((response) => {
        for (let i = 0; i < 5; i++) {
          setTimeout(
            this.getTransactionInfo(response.data.txrefs[i].tx_hash),
            350
          );
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  getTransactionInfo(hash) {

    axios.get(`https://api.blockcypher.com/v1/eth/main/txs/${hash}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
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
