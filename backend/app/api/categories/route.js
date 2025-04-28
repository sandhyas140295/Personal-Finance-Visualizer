import { connectMongo } from '@/lib/connectMongo';
import Category from '@/models/Category';
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string(),
});

export async function POST(request) {
  try {
    await connectMongo();
    const body = await request.json();
    const validatedData = categorySchema.parse(body);

    const category = new Category(validatedData);
    await category.save();

    return Response.json(category, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongo();
    const categories = await Category.find();
    return Response.json(categories);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
