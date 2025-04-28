import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionSchema } from '../utils/validationSchemas';

export const TransactionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true); 
      
      console.log('Form submitted with data:', data); 

     
      
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json(); 

      if (res.ok) {
        console.log('Transaction added successfully', responseData);
        
      } else {
        console.error('Failed to add transaction:', responseData.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('amount')}
        type="number"
        placeholder="Amount"
        className="input"
      />
      {errors.amount && <p>{errors.amount.message}</p>}

      <input
        {...register('date')}
        type="date"
        placeholder="Date"
        className="input"
      />
      {errors.date && <p>{errors.date.message}</p>}

      <input
        {...register('description')}
        type="text"
        placeholder="Description"
        className="input"
      />
      {errors.description && <p>{errors.description.message}</p>}

      <input
        {...register('category')}
        type="text"
        placeholder="Category"
        className="input"
      />
      {errors.category && <p>{errors.category.message}</p>}

      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add Transaction'}
      </button>
    </form>
  );
};
