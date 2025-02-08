'use client'
import React, { createContext, useContext, useState } from 'react'

type ExpenseToEditType = {
    id: number;
    description: string;
    amount: number;
    createdAt: Date;
}

type ExpenseToEditContextType = {
    expenseToEdit: ExpenseToEditType | null;
    setExpenseToEdit: React.Dispatch<React.SetStateAction<ExpenseToEditType | null>>;
  };

const ExpenseToEditContext = createContext<ExpenseToEditContextType | null>(null);

const ExpenseToEditContextProvider = ({children} : {children: React.ReactNode}) => {
    const [expenseToEdit, setExpenseToEdit] = useState<ExpenseToEditType | null>(null);
  return (
    <ExpenseToEditContext.Provider value={{
        expenseToEdit,
        setExpenseToEdit
    }}>
        {children}
    </ExpenseToEditContext.Provider>
  )
}

export const useExpenseToEditContext = () => {
    const context = useContext(ExpenseToEditContext);


    if (context === null) {
        throw new Error (
                "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context
}

export default ExpenseToEditContextProvider