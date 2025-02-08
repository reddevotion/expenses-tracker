"use server"

import { checkAuthentication } from "@/lib/check-auth";
import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createExpense(formData: FormData) {
    const user = await checkAuthentication();
    await prisma.expense.create({
        data: {
            description: formData.get("description") as string,
            amount: Number(formData.get("amount")),
            creatorId: user.id
        }
    })
    revalidatePath('/app/dashboard')
}

export async function updateExpense(formData: FormData, id: number) {
    const user = await checkAuthentication();
    await prisma.expense.update({
        where: {
          id: id,
        },
        data: {
          description: formData.get("description") as string,
          amount: Number(formData.get("amount")),
          creatorId: user.id,
        },
      });
    revalidatePath('/app/dashboard')
}

export async function deleteExpense(id: number) {
    await prisma.expense.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/app/dashboard')
}