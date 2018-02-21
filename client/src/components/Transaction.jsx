import React from 'react';

const Transaction = (props) => {
  return (
    <div>
      To: {props.transaction.to} <br />
      From: {props.transaction.from} <br />
      Amount: {props.transaction.value}
    </div>
  )
}

export default Transaction;
