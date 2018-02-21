import React from 'react';

const Input = (props) => {

    return (
      <div>
        <form onSubmit={props.getLastFiveTransInfo.bind(this)}>
          Enter address: <input type="text" name="address" onChange={props.updateAddress.bind(this)} /><br />
          <input type="submit" value="Search" />
        </form>
      </div>
    )

}

export default Input;
