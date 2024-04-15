import React from 'react'
import { Header, Balance, IncomeExpense, TransactionList, AddTransaction } from './components/index'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>

    </div>
  );
}

export default App;
