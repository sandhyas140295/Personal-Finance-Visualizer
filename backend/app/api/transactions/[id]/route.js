import { connectMongo } from '@/lib/connectMongo';
import Transaction from '@/models/Transaction';

export async function PUT(request, { params }) {
  try {
    await connectMongo();
    const { id } = params;
    const body = await request.json();

    const updatedTransaction = await Transaction.findByIdAndUpdate(id, body, { new: true });
    if (!updatedTransaction) throw new Error('Transaction not found');

    return Response.json(updatedTransaction);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectMongo();
    const { id } = params;

    await Transaction.findByIdAndDelete(id);
    return Response.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}
