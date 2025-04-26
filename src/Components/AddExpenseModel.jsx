import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../Context/BudgetsContext'
import React, { useRef } from 'react'
import { Button, Modal, Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter, ModalHeader, ModalTitle, FormSelect } from 'react-bootstrap'

function AddExpenseModel({ show, handleClose, defaultBudgetId }) {
    const { addExpense, budgets } = useBudgets()
    const disRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        addExpense(
            {
                discription: disRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId: budgetIdRef.current.value
            })
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader closeButton>
                    <ModalTitle>New Expense</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormGroup className='mb-3' controlId='discription'>
                        <FormLabel>Discription</FormLabel>
                        <FormControl ref={disRef} type='text' required />
                    </FormGroup>
                    <FormGroup className='mb-3' controlId='amount'>
                        <FormLabel>Amount</FormLabel>
                        <FormControl ref={amountRef} type='number' required min={0} step={0.01} />
                    </FormGroup>
                    <FormGroup className='mb-3' controlId='budgetId'>
                        <FormLabel>Budget</FormLabel>
                        <FormSelect defaultValue={defaultBudgetId} ref={budgetIdRef} >
                            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                            {budgets.map(budget=>(
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <div className='d-flex justify-content-end'>
                        <Button varient='primary' type='submit'>Add</Button>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    )
}

export default AddExpenseModel