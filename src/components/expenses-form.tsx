"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { createExpense, updateExpense } from '@/actions/actions'
import { useExpenseToEditContext } from '@/context/expense-to-edit-context';


function ExpensesForm() {
    const {expenseToEdit, setExpenseToEdit} = useExpenseToEditContext()

    
    async function handleAction(formData: FormData) {
      if (expenseToEdit) {
        await handleUpdate(formData, expenseToEdit.id);
      } else {
        await createExpense(formData);
      }
    }

    async function handleUpdate(formData: FormData, id: number) {
        await updateExpense(formData, id)
        setExpenseToEdit(null);
    }


  return (
    <motion.form action={handleAction} className='w-full mt-8 rounded overflow-hidden' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}>
        <input type="text" name='description' placeholder='Description' className='w-full px-3 py-2 outline-none' defaultValue={expenseToEdit?.description || ''}  />
        <input type="number" name='amount' placeholder='Amount' className='w-full px-3 py-2 outline-none' defaultValue={expenseToEdit?.amount}/>
        <button className='w-full bg-blue-500 text-white p-2 font-bold hover:bg-blue-600 transition '>{expenseToEdit ? 'Update Expense' : 'Add Expense'}</button>
    </motion.form>
  )
}

export default ExpensesForm