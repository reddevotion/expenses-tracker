"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { deleteExpense } from '@/actions/actions';
import { useExpenseToEditContext } from '@/context/expense-to-edit-context';
type ExpensesListProps = {
    expenses: {
      id: number;
      description: string;
      amount: number;
      creatorId: string;
      createdAt: Date;
    }[];
  };
function ExpensesList({expenses}: ExpensesListProps) {
    const {setExpenseToEdit} = useExpenseToEditContext()
  return (
    <motion.ul className="h-[300px] bg-white rounded mt-4 shadow-md" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>
        {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center px-4 py-2 border-b">
          <p>{expense.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
          <button
            className="text-[10px] h-[20px] w-[20px] bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
            onClick={() => {setExpenseToEdit(expense)}}
          >
            E
          </button>
          <button
            className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600"
            onClick={async () => { await deleteExpense(expense.id)}}
          >
            X
          </button>
        </li>
      ))}
    </motion.ul>
  )
}

export default ExpensesList