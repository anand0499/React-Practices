import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

  const [title,setTitle]=useState(props.title);

  const clickHandler=()=>{
    setTitle("Anand Choubey")
    console.log("clicked")
  }
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>Rs{props.amount}</div>
        </div>
        <button onClick={clickHandler} >Change Title</button>
    </div>
  )
}

export default ExpenseItem