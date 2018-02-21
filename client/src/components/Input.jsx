import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      transactions: [],
    }
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
        <form onSubmit={this.getLastFiveTransInfo.bind(this)}>
          Enter address: <input type="text" name="address" onChange={this.updateAddress.bind(this)} /><br />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

}

export default Input;
