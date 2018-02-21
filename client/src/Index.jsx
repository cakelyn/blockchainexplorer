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
      showClear: false,
    }
    this.updateAddress = this.updateAddress.bind(this);
    this.getLastFiveTransInfo = this.getLastFiveTransInfo.bind(this);
    this.clearEverything = this.clearEverything.bind(this);
  }

  updateAddress(e) {
    this.setState({ address: e.target.value })
  }

  getLastFiveTransInfo(e) {
    e.preventDefault();

    // we are checking if the address is empty because when the 'clear' button
    // is clicked, the address is reset to an empty string, and this check
    // will stop executing the live updates
    if (this.state.address != '') {
      axios({
        method: 'post',
        url: '/transactions',
        data: { address: this.state.address }
      })
      .then((response) => {
        this.setState({ transactions: response.data.result, showClear: true });

        // this will make sure that the transaction info live updates
        setTimeout(() => this.getLastFiveTransInfo(e), 1000);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
    }
  }

  clearEverything() {
    this.setState({
      address: '',
      transactions: [],
      showClear: false
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Blockchain Explorer</h1>
          <p>See the lastest 5 transactions from any Ethereum address!</p>
          <Input updateAddress={this.updateAddress}
                 getLastFiveTransInfo={this.getLastFiveTransInfo}
                 showClear={this.state.showClear}
                 clearEverything={this.clearEverything}
                 value={this.state.address} />
          <Transactions transactions={this.state.transactions} />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
