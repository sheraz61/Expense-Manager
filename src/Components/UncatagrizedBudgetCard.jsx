import React from 'react'
import BudgetCard from './BudgetCard'
import { UNCATEGORIZED_BUDGET_ID,useBudgets } from '../Context/BudgetsContext'

function UnCatagrizedBudgetCard(props) {
    const {getBudgetExpenses} = useBudgets()
    const amount=getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
 if (amount===0) return null
    return (
   <BudgetCard amount={amount} gray name='Uncatagrized' {...props}/>
  )
}

export default UnCatagrizedBudgetCard