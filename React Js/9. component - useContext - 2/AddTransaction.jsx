import { React, useContext } from 'react'
import { TransactionsContext } from './ElementProvider'

const AddTransaction = () => {
  // That's how we can access the global state in all the components without prop drilling
  const {transactions, setTransactions} = useContext(TransactionsContext);

  return (
    <div>
      {transactions}
    </div>
  )
}

export default AddTransaction
