import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Input = (props) => {

    return (
      <div>
        <form onSubmit={props.getLastFiveTransInfo.bind(this)}>
          <TextField
            floatingLabelText="Enter address"
            name="address"
            onChange={props.updateAddress} />
          <br />
          <RaisedButton
            label="Seach"
            primary={true}
            type="submit" />
        </form>
      </div>
    )

}

export default Input;
