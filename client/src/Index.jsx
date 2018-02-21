import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.jsx';
import Transactions from './components/Transactions.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
      this.setState({ transactions: response.data.result });
      // this will make sure that the transaction info live updates
      setTimeout(() => this.getLastFiveTransInfo(e), 1000);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Input updateAddress={this.updateAddress} getLastFiveTransInfo={this.getLastFiveTransInfo} />
          <Transactions transactions={this.state.transactions} />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
