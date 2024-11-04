import { React } from 'react'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { ContextProvider } from './components/ContextProvider'

function App() {
  return (
    <>
      {/* We can access the gobal state in all the components without prop drilling */}
      <ContextProvider>
          <TransactionList />
          <AddTransaction />
      </ContextProvider>
    </>
  )
}

export default App
