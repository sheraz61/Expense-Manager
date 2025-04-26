import React from 'react'
import BudgetCard from './BudgetCard'
import { useBudgets } from '../Context/BudgetsContext'

function TotalBudgetCard() {
    const {expenses,budgets} = useBudgets()
    const amount=expenses.reduce((total, expense) => total + expense.amount, 0)
    const max=budgets.reduce((total, budget) => total + budget.max, 0)
 if (max===0) return null
    return (
   <BudgetCard amount={amount} gray name='Total' max={max} hideButtons/>
  )
}

export default TotalBudgetCard