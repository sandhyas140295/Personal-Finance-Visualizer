import { connectMongo } from '@/lib/connectMongo';
import Budget from '@/models/Budget';
import { z } from 'zod';

const budgetSchema = z.object({
  category: z.string(),
  amount: z.number(),
  month: z.string(),
});

export async function POST(request) {
  try {
    await connectMongo();
    const body = await request.json();
    const validatedData = budgetSchema.parse(body);

    const existingBudget = await Budget.findOne({
      category: validatedData.category,
      month: validatedData.month,
    });

    if (existingBudget) {
      existingBudget.amount = validatedData.amount;
      await existingBudget.save();
      return Response.json(existingBudget);
    } else {
      const budget = new Budget(validatedData);
      await budget.save();
      return Response.json(budget, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongo();
    const budgets = await Budget.find();
    return Response.json(budgets);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
