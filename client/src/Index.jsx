import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.jsx';
import Transactions from './components/Transactions.jsx';
import axios from 'axios';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      transactions: [],
    }
    this.updateAddress = this.updateAddress.bind(this);
    this.getLastFiveTransInfo = this.getLastFiveTransInfo.bind(this);
  }

  updateAddress(e) {
    this.setState({ address: e.target.value })
  }

  getLastFiveTransInfo(e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/transactions',
      data: { address: this.state.address }
    })
      .then((response) => {
        this.setState({ transactions: response.data.result});
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    return (
      <div>
        <Input updateAddress={this.updateAddress} getLastFiveTransInfo={this.getLastFiveTransInfo} />
        <Transactions />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
