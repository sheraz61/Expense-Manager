import { useBudgets } from '../Context/BudgetsContext'
import React, { useRef } from 'react'
import { Button,Modal, Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'

function AddBudgetModel({ show, handleClose }) {
  const nameRef = useRef()
  const { addBudget } = useBudgets()
  const maxRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    addBudget(
      {
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value)
      })
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <ModalHeader closeButton>
          <ModalTitle>New Budget</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <FormGroup className='mb-3' controlId='name'>
            <FormLabel>Name</FormLabel>
            <FormControl ref={nameRef} type='text' required />
          </FormGroup>
          <FormGroup className='mb-3' controlId='max'>
            <FormLabel>Maximun Spending</FormLabel>
            <FormControl ref={maxRef} type='number' required min={0} step={0.01} />
          </FormGroup>
          <div className='d-flex justify-content-end'>
            <Button varient='primary' type='submit'>Add</Button>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default AddBudgetModel