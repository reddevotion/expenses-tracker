import ExpensesForm from '@/components/expenses-form'
import ExpensesList from '@/components/expenses-list'
import { checkAuthentication } from '@/lib/check-auth';
import { prisma } from '@/lib/db';
import React from 'react'

async function Page() {
  const user = await checkAuthentication();

    const expenses = await prisma.expense.findMany({
    where: {
      creatorId: user.id,
    },
  });
  return (
    <div>
        <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>
        <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses}/>
        <ExpensesForm/>
        </div>
    </div>
  )
}

export default Page