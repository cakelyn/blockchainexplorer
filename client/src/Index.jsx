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
      keepUpdating: false,
      timesUpdated: 0
    }
    this.updateAddress = this.updateAddress.bind(this);
    this.getLastFiveTransInfo = this.getLastFiveTransInfo.bind(this);
  }

  updateAddress(e) {
    this.setState({ address: e.target.value })
  }

  getLastFiveTransInfo(e) {
    console.log('hello')
    e.preventDefault();

    axios({
      method: 'post',
      url: '/transactions',
      data: { address: this.state.address }
    })
    .then((response) => {
      this.setState({ transactions: response.data.result, keepUpdating: true });
      setTimeout(() => this.getLastFiveTransInfo(e), 1000);
    })
    .catch((err) => {
      console.log(err);
      this.setState({ keepUpdating: false });
    });

  }


  render() {
    return (
      <div>
        <Input updateAddress={this.updateAddress} getLastFiveTransInfo={this.getLastFiveTransInfo} />
        <Transactions transactions={this.state.transactions} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
