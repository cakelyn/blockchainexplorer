import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  margin: '0 auto',
  marginTop: 15,
  padding: 15,
  width: 500
}

const Transaction = (props) => {
  return (
    <Paper style={style} zDepth={3}>

      <div>
        To: {props.transaction.to} <br />
        From: {props.transaction.from} <br />
        Amount: {props.transaction.value}
      </div>
    </Paper>
  )
}

export default Transaction;
