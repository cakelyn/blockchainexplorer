import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      address: ''
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
        console.log(response.data);
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

ReactDOM.render(<Index />, document.getElementById('app'));
