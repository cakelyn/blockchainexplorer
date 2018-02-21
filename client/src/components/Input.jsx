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
            onChange={props.updateAddress}
            value={props.value}/>
          <br />
          <RaisedButton
            label="Seach"
            primary={true}
            type="submit" />
          { // this button will only show if there are transactions showing
            props.showClear ?
            <RaisedButton
              label="Clear"
              secondary={true}
              onClick={props.clearEverything} />
            :
            null
          }
        </form>
      </div>
    )

}

export default Input;
