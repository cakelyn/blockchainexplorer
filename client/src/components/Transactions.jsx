import React from 'react';
import Transaction from './Transaction.jsx';

const Transactions = (props) => {

  // map will only run if there are transactions stored in the state
  // and only the last 5 transactions will be mapped
  console.log(props.transactions)
  return (
    <div>
      { props.transactions.length > 0 ?
        props.transactions.slice(0, 5).map(
          (transaction) => {
            return <Transaction transaction={transaction} />
          }
        )
        :
        null
      }
    </div>
  )
}

export default Transactions;
