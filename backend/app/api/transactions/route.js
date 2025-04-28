import { connectMongo } from '@/lib/connectMongo';
import Transaction from '@/models/Transaction';
import { z } from 'zod';


let transactions = []; 

export async function GET(req) {
  return new Response(JSON.stringify(transactions), { status: 200 });
}

export async function POST(req) {
  const newTransaction = await req.json();
  transactions.push(newTransaction); 
  return new Response(JSON.stringify(newTransaction), { status: 201 });
}
