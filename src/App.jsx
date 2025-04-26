import React, { useState } from 'react'
import { Stack, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from './Components/BudgetCard'
import AddBudgetModel from './Components/AddBudgetModel'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './Context/BudgetsContext'
import AddExpenseModel from './Components/AddExpenseModel'
import UnCatagrizedBudgetCard from './Components/UnCatagrizedBudgetCard'
import TotalBudgetCard from './Components/TotalBudgetCard'
import ViewExpensesModal from './Components/ViewExpensesModel'
function App() {
  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
  const [showAddExpenseModel, setShowAddExpenseModel] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModelBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()

  function openAddExpenseModel(budgetId) {
    setShowAddExpenseModel(true)
    setAddExpenseModelBudgetId(budgetId)
  }
  return (
    <>
      <Container className='my-4'>
        <Stack direction="horizontal" gap='2' className='mb-4'>
          <h1 className='me-auto'>Budget</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModel(true)}>Add Budget</Button>
          <Button variant='outline-primary' onClick={openAddExpenseModel}>Add Expense</Button>
        </Stack>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem', alignItems: 'flex-start' }}>
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
            return (
              <BudgetCard onAddExpenseClick={() => openAddExpenseModel(budget.id)}
                     onViewExpenseClick={()=>setViewExpensesModalBudgetId(budget.id)}
              key={budget.id} name={budget.name} amount={amount} max={budget.max}></BudgetCard>
            )
          })}
        </div>
      </Container>
      <AddBudgetModel show={showAddBudgetModel} handleClose={() => setShowAddBudgetModel(false)} />
      <AddExpenseModel defaultBudgetId={addExpenseModalBudgetId} show={showAddExpenseModel} handleClose={() => setShowAddExpenseModel(false)} />
      <UnCatagrizedBudgetCard onAddExpenseClick={openAddExpenseModel} 
      onViewExpenseClick={()=>setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
      />
      <TotalBudgetCard />
      <ViewExpensesModal
      budgetId={viewExpensesModalBudgetId}
      handleClose={()=>setViewExpensesModalBudgetId()}
      />
    </>)
}

export default App