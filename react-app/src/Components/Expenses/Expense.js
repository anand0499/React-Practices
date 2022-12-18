import React, { useState } from 'react'
import Card from '../UI/Card'
import "./Expense.css"
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'


const Expense = (props) => {
  const [filteredYear,setFilteredYear]=useState('2020');

  const filterChangeHandler=(selecledYear)=>{
    setFilteredYear(selecledYear);
  }

  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;;
  })


  let expenseContent=<p>No Expenses in this year</p>;

  if (expenseContent.length>0 ){

    expenseContent=filteredExpenses.map((expense)=>{
      return <ExpenseItem key={expense.id}  date={expense.date} title={expense.title} amount={expense.amount}  />
  })
  }




  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

     
        {filteredExpenses.length===0 && <p>No Expenses in this year</p>}
      
        {filteredExpenses.length>0 && 
          filteredExpenses.length===0 ? <p>No Expenses in this year</p> : filteredExpenses.map((expense)=>{
            return <ExpenseItem key={expense.id}  date={expense.date} title={expense.title} amount={expense.amount}  />
        })}
      
      
      {/*  {filteredExpenses.length===0 ? <p>No Expenses in this year</p> : filteredExpenses.map((expense)=>{
            return <ExpenseItem key={expense.id}  date={expense.date} title={expense.title} amount={expense.amount}  />
        })}
      */}

        {/*   
           {filteredExpenses.length===0 ? (<p>No Expenses in this year</p> ): (filteredExpenses.map((expense)=>{
            return <ExpenseItem key={expense.id}  date={expense.date} title={expense.title} amount={expense.amount}  />)
        })}
      */}
    </Card>
  )
}

export default Expense