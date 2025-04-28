import { z } from 'zod';



export const budgetSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  amount: z.number().positive().min(1, 'Amount must be greater than 0'),
  month: z.string().min(1, 'Month is required')
});




export const transactionSchema = z.object({
  amount: z.preprocess((val) => parseFloat(val), z.number()),
  date: z.string(),
  description: z.string(),
  category: z.string(),
});