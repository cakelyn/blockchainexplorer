import React from 'react';
import Transaction from './Transaction.jsx';

const Transactions = (props) => {

  // only the last 5 transactions will show

  return (
    <div>
      {props.transactions.slice(0, 5).map((transaction) => {
        return <Transaction transaction={transaction} />
      })}
    </div>
  )
}

export default Transactions;
